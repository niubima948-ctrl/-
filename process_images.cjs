const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const zipPath = path.join(__dirname, '更新.zip');
const customImagesDir = path.join(__dirname, 'public', 'custom_images');
const mappingPath = path.join(__dirname, 'mapping.json');
const dataTsPath = path.join(__dirname, 'src', 'data.ts');

if (fs.existsSync(zipPath)) {
  console.log('Extracting zip...');
  const zip = new AdmZip(zipPath);
  const extractDir = path.join(__dirname, 'temp_extracted');
  if (fs.existsSync(extractDir)) {
    fs.rmSync(extractDir, { recursive: true, force: true });
  }
  zip.extractAllTo(extractDir, true);
  
  const images = [];
  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         walk(fullPath);
      } else {
         if (fullPath.match(/\.(jpg|jpeg|png|gif|emf)$/i)) {
             images.push(fullPath);
         }
      }
    }
  }
  walk(extractDir);
  
  console.log(`Found ${images.length} image files in zip.`);

  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
  const stageToImages = {};
  
  if (fs.existsSync(customImagesDir)) {
      fs.rmSync(customImagesDir, { recursive: true, force: true });
  }
  fs.mkdirSync(customImagesDir, { recursive: true });
  
  let mapCount = 0;
  images.forEach(imgPath => {
     let fileName = path.basename(imgPath);
     
     const stageName = mapping[fileName];
     if (stageName && stageName !== "不要使用此内容") {
         const newDest = path.join(customImagesDir, fileName);
         if (!fs.existsSync(newDest)) {
             fs.copyFileSync(imgPath, newDest);
         }
         
         if (!stageToImages[stageName]) {
             stageToImages[stageName] = new Set();
         }
         stageToImages[stageName].add(`/custom_images/${fileName}`);
         mapCount++;
     }
  });
  
  // Convert Sets back to arrays
  for (let key in stageToImages) {
      stageToImages[key] = Array.from(stageToImages[key]);
  }

  console.log(`Mapped ${mapCount} files to stages. Total unique stages: ${Object.keys(stageToImages).length}`);

  let dataTs = fs.readFileSync(dataTsPath, 'utf8');
  
  // First, clear all imageUrls arrays
  dataTs = dataTs.replace(/\"imageUrls\"\s*:\s*\[.*?\]/gs, `"imageUrls": []`);
  
  // Now inject new urls
  for (const [stageName, urls] of Object.entries(stageToImages)) {
      // Find the specific stage in data.ts
      // Some names in data.ts might have a slight difference, but we will match the substring
      const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const stageRegex = new RegExp(`(\"name\"\\s*:\\s*\"[^\"]*${escapeRegExp(stageName)}\".*?\"imageUrls\"\\s*:\\s*\\[)(\\])`, 's');
      
      const beforeReplacement = dataTs;
      dataTs = dataTs.replace(stageRegex, `$1\n          ${urls.map(u => `"${u}"`).join(',\n          ')}\n        $2`);
      if (beforeReplacement === dataTs) {
          console.log('WARNING: Could not find stage strictly matching:', stageName);
      }
  }

  fs.writeFileSync(dataTsPath, dataTs);
  console.log('Successfully updated data.ts and custom_images!');
} else {
  console.log('No 更新.zip found.');
}
