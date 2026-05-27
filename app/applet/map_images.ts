import * as fs from 'fs';
import { parasiteData } from './src/data.ts';

const files = JSON.parse(fs.readFileSync('new_images.json', 'utf-8'));

function isMatch(stageName, str, parasiteName) {
  // basic normalization
  const norm = (s) => s.replace(/\s+/g, '').toLowerCase();
  const nStage = norm(stageName);
  const nStr = norm(str);
  
  // if exact match, high priority
  if(nStr.includes(nStage)) return true;
  
  // Custom mappings for tricky ones based on parasite name + keywords
  // e.g. "溶组织内阿米巴包囊" -> "溶组织内阿米巴" and "包囊"
  const stageKeywords = nStage.split(/[、，()]/);
  // and so on...
  return false;
}

const newData = parasiteData.map(p => {
  const pName = p.chineseName.replace(/\s*\(.*\)/, '');
  return {
    ...p,
    stages: p.stages.map(s => {
      const stageRealName = s.name.replace(/^\d+\.\s*/, '');
      
      // Let's implement a matching logic
      let matched = files.filter(f => {
        // Strip .jpg, .png etc
        const base = f.replace(/\.[^/.]+$/, "");
        
        // simple direct matching
        if (base.includes(stageRealName)) return true;
        
        // check keyword intersection
        // e.g. base = "阿-大滋", stage = "溶组织内阿米巴滋养体" (requires custom manual rules, but we can do our best)
        return false;
      });
      
      // We also map everything manually if we want, but programmatically is easier
      return {
        ...s,
        test_matches: matched
      };
    })
  };
});

fs.writeFileSync('test_match.json', JSON.stringify(newData, null, 2));
