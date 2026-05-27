import { parasiteData } from './src/data.ts';
import fs from 'fs';

const files = fs.readdirSync('public/custom_images');

for (const p of parasiteData) {
  const pName = p.chineseName.split(' ')[0].trim();
  for (const s of p.stages) {
    const sName = s.name.replace(/^\d+\.\s*/, '').trim();

    let matched = files.filter(f => {
      const name = f.replace(/\.[^/.]+$/, '');
      if (name.includes(sName)) return true;
      if (sName.includes(name)) return true;

      const n1 = pName.replace(' (', '(').split('(')[0];
      const aliasMatch = p.chineseName.match(/\((.*?)\)/);
      const n2 = aliasMatch ? aliasMatch[1] : null;

      if (sName === '杜氏利什曼原虫无鞭毛体' && name.includes('杜-无')) return true;
      if (sName === '杜氏利什曼原虫无鞭毛体' && name.includes('杜无')) return true;
      if (sName === '溶组织内阿米巴包囊' && name.includes('阿米巴') && name.includes('包囊')) return true;
      if (sName === '溶组织内阿米巴包囊' && f.includes('包囊.png')) return true;
      if (sName === '溶组织内阿米巴滋养体' && name.includes('阿-大滋')) return true;
      if (sName === '溶组织内阿米巴滋养体' && name.includes('阿-小滋')) return true;
      if (pName.includes('姜片虫') && name.includes('姜片')) return true;

      let baseMatch = name.includes(n1) || (n2 && name.includes(n2));
      if (baseMatch) {
         if (sName.includes('虫卵') && name.includes('卵')) return true;
         if (sName.includes('成虫') && name.includes('成虫')) return true;
         if (sName.includes('微丝蚴') && name.includes('微丝蚴')) return true;
         if (sName.includes('尾蚴') && name.includes('尾蚴') && !name.includes('囊')) return true;
      }

      return false;
    });

    s.imageUrls = matched.map(f => '/custom_images/' + f);
  }
}

let newContent = 'import { Parasite } from \'./types\';\n\nexport const parasiteData: Parasite[] = ' + JSON.stringify(parasiteData, null, 2) + ';\n';
fs.writeFileSync('src/data.ts', newContent);
console.log('Updated!');