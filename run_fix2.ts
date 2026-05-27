import { parasiteData } from './src/data.ts';
import fs from 'fs';

const files = fs.readdirSync('public/custom_images');

for (const p of parasiteData) {
  for (const s of p.stages) {
    if (s.imageUrls.length > 0) continue;

    const sName = s.name.replace(/^\d+\.\s*/, '').trim();

    let matched = files.filter(f => {
      const name = f.replace(/\.[^/.]+$/, '');
      if (sName.includes('肺吸虫囊蚴') && name.includes('并殖吸虫囊蚴')) return true;
      if (sName.includes('猪带绦虫') && name.includes('链状带绦虫')) {
          if (sName.includes('头节') && name.includes('头节')) return true;
          if (sName.includes('成节') && name.includes('成节')) return true;
          if (sName.includes('孕节') && (name.includes('孕节') || name.includes('妊娠'))) return true;
          if (sName.includes('囊尾蚴') && name.includes('囊尾蚴')) return true;
      }
      if (sName.includes('猪带绦虫孕节') && name.includes('猪绦孕')) return true;
      if (sName.includes('猪带绦虫孕节') && name.includes('猪带绦虫幼虫和妊娠节片')) return true;
      if (sName.includes('牛带绦虫') && name.includes('肥胖带绦虫')) {
          if (sName.includes('头节') && name.includes('头节')) return true;
          if (sName.includes('成节') && name.includes('成节')) return true;
          if (sName.includes('孕节') && name.includes('孕节')) return true;
      }
      if (sName.includes('蛔虫唇瓣') && name.includes('蛔线虫唇瓣')) return true;
      if (sName.includes('十二指肠钩虫口囊') && (name.includes('十二指肠钩口线虫口囊') || name.includes('十二指肠钩口线虫和美洲板口线虫口囊'))) return true;
      if (sName.includes('美洲钩虫口囊') && (name.includes('美洲板口线虫口囊') || name.includes('十二指肠钩口线虫和美洲板口线虫口囊'))) return true;
      if (sName.includes('蛲虫头顶部') && name.includes('蛲虫成虫头部')) return true;

      return false;
    });

    s.imageUrls = matched.map(f => '/custom_images/' + f);
  }
}

let newContent = 'import { Parasite } from \'./types\';\n\nexport const parasiteData: Parasite[] = ' + JSON.stringify(parasiteData, null, 2) + ';\n';
fs.writeFileSync('src/data.ts', newContent);
console.log('Fixed missing images!');