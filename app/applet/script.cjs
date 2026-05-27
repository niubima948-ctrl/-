const fs = require('fs');
const imageIndex = JSON.parse(fs.readFileSync('new_images.json', 'utf-8'));

// Helper mapping
const mapping = [
  { id: 1, name: "溶组织内阿米巴包囊", key: "Entamoeba histolytica cyst", desc: "包囊呈圆球形，成熟包囊具有4个核，可见棒状的拟染色体。", morphology: "圆形，具有四个泡状核和棒状拟染色体。" },
  { id: 2, name: "溶组织内阿米巴滋养体", key: "Entamoeba histolytica trophozoite", desc: "常含有被吞噬的红细胞。核为一个典型的泡状核（核仁小而居中）。", morphology: "形态不规则且多变，内质颗粒状，常含有被吞噬的红细胞。" },
  { id: 3, name: "阴道毛滴虫滋养体", key: "Trichomonas vaginalis trophozoite", desc: "梨形或椭圆形，有四根前鞭毛，无包囊期。", morphology: "前端有4根鞭毛，波动膜短，体中部有一明显的细胞核。" },
  { id: 4, name: "蓝氏贾第鞭毛虫滋养体", key: "Giardia lamblia trophozoite", desc: "形似老头脸或猫头鹰脸，有两个大吸盘和泡状核。", morphology: "倒置梨形，两侧对称，可见两核和轴柱。" },
  { id: 5, name: "蓝氏贾第鞭毛虫包囊", key: "Giardia lamblia cyst", desc: "椭圆形厚壁，成熟时含4个核，可见隐约的轴柱。", morphology: "椭圆形，成熟有4个核，多数在一端。" },
  { id: 6, name: "杜氏利什曼原虫无鞭毛体", key: "Leishmania donovani amastigote", desc: "寄生于巨噬细胞内，含有核和动基体（L-D小体）。", morphology: "卵圆形，胞质浅蓝，核紫红，可见一深紫色动基体。" },
  { id: 7, name: "杜氏利什曼原虫前鞭毛体", key: "Leishmania donovani promastigote", desc: "寄生于白蛉体内，呈梭形，前端游离着一根游离鞭毛。", morphology: "纺锤形或长条形，有单根游离鞭毛。" },
  { id: 8, name: "间日疟原虫环状体", key: "Plasmodium vivax ring", desc: "寄生在红细胞内，呈指环状，细胞核红，胞质蓝成环状。", morphology: "环状的细胞质和一侧边缘的一枚核（类似于戒指）。" },
  { id: 9, name: "间日疟原虫滋养体", key: "Plasmodium vivax trophozoite", desc: "红细胞胀大，阿米巴样运动，常见有不规则的伪足。", morphology: "体积大，多形态，红细胞可变大并出现薛氏点。" },
  { id: 10, name: "间日疟原虫成熟裂殖体", key: "Plasmodium vivax schizont", desc: "红细胞内的裂殖子达12-24个，排列不规则，常伴疟色素堆积。", morphology: "散落许多裂殖子，色素多位于中央。" },
  { id: 11, name: "恶性疟原虫环状体", key: "Plasmodium falciparum ring", desc: "环纤细，核较大也可有两个核，常见多个环状体寄生于同一红细胞。", morphology: "环纤细，多见红细胞边缘感染和多重感染。" },
  { id: 12, name: "恶性疟原虫雌雄配子体", key: "Plasmodium falciparum gametocyte", desc: "呈新月形或腊肠形。", morphology: "新月形，雌配子体较细长，雄配子体稍短粗颜色浅。" },
  { id: 13, name: "肝吸虫虫卵", key: "Clonorchis sinensis egg", desc: "极小，形如芝麻，有卵盖，盖旁有肩峰，底部常有小结节。", morphology: "淡黄褐色，有盖，肩峰明显，底端有小疣突。" },
  { id: 14, name: "肝吸虫成虫", key: "Clonorchis sinensis adult", desc: "葵花籽形，体后三分之一处有前后排列的两个高度树枝状睾丸。", morphology: "体长扁平，两个分支的睾丸一前一后位于后端。" },
  { id: 15, name: "肺吸虫虫卵", key: "Paragonimus westermani egg", desc: "略不对称，金黄色，卵盖大且常倾斜，卵壳底端常增厚。", morphology: "金黄色较大，椭圆但两侧不对称，卵盖倾斜。" },
  { id: 16, name: "肺吸虫成虫", key: "Paragonimus adult", desc: "呈半个咖啡豆状，腹吸盘居中。生殖器官左右并列。", morphology: "肥厚咖啡豆状，卵巢和子宫左右并列并伴有睾丸并列。" },
  { id: 17, name: "肺吸虫囊蚴", key: "Paragonimus metacercaria", desc: "具有两层囊壁，内含卷曲的后尾蚴，可见黑色的排泄囊。", morphology: "球形，双层囊壁，内含有未发育成熟的成虫雏形及排泄囊。" },
  { id: 18, name: "日本血吸虫虫卵", key: "Schistosoma japonicum egg", desc: "椭圆形，无卵盖，一侧有微小的侧棘，内部含有发育成形的毛蚴。", morphology: "淡黄色，侧棘较小或不明显，内含成熟的毛蚴。" },
  { id: 19, name: "日本血吸虫成虫", key: "Schistosoma japonicum adult male female", desc: "雌雄异体。雄虫粗短且有抱雌沟，雌虫细长常包裹其中。", morphology: "雄虫较宽，形成抱雌体，雌虫细长且深居沟内。" },
  { id: 20, name: "日本血吸虫尾蚴", key: "Schistosoma cercaria", desc: "体部和分叉的尾部组成，可以自由游动并钻透皮肤。", morphology: "具分叉的尾部，含有多种腺体供钻透皮肤使用。" },
  { id: 21, name: "姜片虫成虫", key: "Fasciolopsis buski adult", desc: "猪和人小肠中的巨型吸虫，扁平如生姜片，肠支呈现锯齿波浪状不分支。", morphology: "硕大的叶状躯体，肠管波曲但不呈树枝状分支。" },
  { id: 22, name: "姜片虫虫卵", key: "Fasciolopsis buski egg", desc: "人体寄生虫中最大者。椭圆形，卵盖不明显，内部充满卵黄细胞。", morphology: "巨大的棕黄色卵，边缘较薄，含一个受精卵和大量颗粒状的卵黄细胞。" },
  { id: 23, name: "带绦虫虫卵", key: "Taenia egg", desc: "球形，卵壳外有一层具有放射状条纹的厚“胚膜”，内含六钩蚴。", morphology: "球形放射状厚壁，六钩蚴形态（猪和牛的镜下一致）。" },
  { id: 24, name: "猪带绦虫头节", key: "Taenia solium scolex", desc: "圆球形，具有四个吸盘和一顶突，顶突上有两圈小钩。", morphology: "具有四个杯状吸盘及具双排钩的顶突。" },
  { id: 25, name: "猪带绦虫成节", key: "Taenia solium proglottid", desc: "宽近于长或呈方形，卵巢三叶（多一小叶），阴道较直。", morphology: "具有雌雄生殖器官各一套，卵巢为三叶状。" },
  { id: 26, name: "猪带绦虫孕节", key: "Taenia solium gravid proglottid", desc: "内部几乎仅见子宫，子宫每侧的分支数在 7-13 支，且较树枝状。", morphology: "子宫高度分支，两侧各有 7-13 支。" },
  { id: 27, name: "猪带绦虫囊尾蚴", key: "Taenia solium cysticercus", desc: "米粒大囊泡，内有一向内翻转的头节存在（俗称米心肉）。", morphology: "半透明囊泡，囊壁上有内翻的含有四个吸盘和圈钩的头节。" },
  { id: 28, name: "牛带绦虫头节", key: "Taenia saginata scolex", desc: "近立方形，具有四个大吸盘，但无顶突和小钩。", morphology: "单纯四个大吸盘，无顶突，无小钩。" },
  { id: 29, name: "牛带绦虫成节", key: "Taenia saginata proglottid", desc: "呈方形或略长方形，卵巢只有左右两叶。", morphology: "具有雌雄生殖系统一套，卵巢仅有两叶。" },
  { id: 30, name: "牛带绦虫孕节", key: "Taenia saginata gravid proglottid", desc: "长条形，子宫高度分支，每侧的分支数在 15-30 支，呈细长条状。", morphology: "子宫分支极多，每侧达15至30支。" },
  { id: 31, name: "牛带绦虫囊尾蚴", key: "Taenia saginata cysticercus", desc: "类似猪囊尾蚴，但内翻的头节只有四个吸盘而无钩。", morphology: "含有牛带绦虫未成熟头节的半透明囊。" },
  { id: 32, name: "受精蛔虫卵", key: "Ascaris lumbricoides fertilized egg", desc: "宽椭圆形，棕黄色，外面有一层凹凸不平的蛋白质膜，内部含有圆形的大卵细胞。", morphology: "厚壁，表面波浪状粗糙蛋白质膜，新月形空隙。" },
  { id: 33, name: "未受精蛔虫卵", key: "Ascaris lumbricoides unfertilized egg", desc: "长椭圆形，壳薄，内含大小不等的屈光颗粒，蛋白质膜相对较平。", morphology: "狭长椭圆，内部充满排列不规则的折光颗粒。" },
  { id: 34, name: "脱蛋白质膜受精蛔虫卵", key: "Ascaris decorticated egg", desc: "由于物理或化学原因失去了外层蛋白质膜的受精卵。光滑，透明壳。", morphology: "表面光滑无突起，其余同典型的受精蛔虫卵。" },
  { id: 35, name: "蛔虫雄虫交合刺", key: "Ascaris spicule", desc: "雄性蛔虫尾端有一对从泄殖腔伸出的镰刀状交合刺。", morphology: "呈弯曲的细长小骨刺状结构，常伸出体外。" },
  { id: 36, name: "蛔虫唇瓣", key: "Ascaris lips", desc: "头端具有三个呈品字形排列的唇瓣（一个背唇，二个亚腹唇）。", morphology: "呈三个钝圆的突起，边缘常有细齿。" },
  { id: 37, name: "钩虫卵", key: "Hookworm egg", desc: "椭圆形，无色透明，壳极薄，内含 2-4 个或 8 个分裂状态的卵细胞，与卵壳间有明显空隙。", morphology: "无色透明，极薄卵壳，内有卵裂球。" },
  { id: 38, name: "十二指肠钩虫口囊", key: "Ancylostoma duodenale buccal", desc: "腹侧边缘有两对犹如毒牙般锐利的钩齿。", morphology: "杯状的口囊上有两对尖锐的板状齿。" },
  { id: 39, name: "美洲钩虫口囊", key: "Necator americanus buccal", desc: "腹侧边缘只有一对半月形的板齿，无尖齿。", morphology: "口囊有半月形的切板，而不是刺突齿。" },
  { id: 40, name: "十二指肠钩虫雄虫交合伞", key: "Ancylostoma duodenale bursa", desc: "在雄虫尾部呈现膨大如伞，背辐肋呈分支状（分成三分叉等）。交合伞撑开如钟罩。", morphology: "雄性尾端特化出的伞状，背侧有特征性的二分支再三分支。" },
  { id: 41, name: "美洲钩虫雄虫交合伞", key: "Necator americanus bursa", desc: "伞形较长，背肋分支特征与十二指肠构虫不同（通常分为二分支各二叉）。", morphology: "交合伞结构与背辐肋不同，呈特殊的二分支结构。" },
  { id: 42, name: "蛲虫卵", key: "Enterobius vermicularis egg", desc: "明显不对称，形如半个平底面包或柿核，内含发育成形的蝌蚪期幼虫。", morphology: "无色透明，壳厚，不对称呈D字形底。" },
  { id: 43, name: "蛲虫头顶部（咽管球）", key: "Enterobius vermicularis adult", desc: "头端具有颈翼，食管后部膨大为特殊的圆球形（咽管球）。", morphology: "头端两旁有呈翼状的膨大区，后侧连着一个大球状的咽管末端。" },
  { id: 44, name: "鞭虫卵", key: "Trichuris trichiura egg", desc: "呈纺锤状或柚子形，金黄色，两端各具有一个透明塞。", morphology: "典型的纺锤（灯笼）形，两端透明栓盖极其醒目。" },
  { id: 45, name: "雌鞭虫成虫", key: "Trichuris trichiura female", desc: "尾端较钝圆且伸直，前细后粗如鞭子状。", morphology: "前端如发丝极细，后端粗圆且末端钝直并具有生殖孔。" },
  { id: 46, name: "雄鞭虫成虫", key: "Trichuris trichiura male", desc: "尾部向腹面呈现强烈的卷曲（发条状卷尾），有单根交合刺。", morphology: "后端卷曲，可见露出的条形交合刺。" },
  { id: 47, name: "班氏微丝蚴", key: "Wuchereria bancrofti microfilaria", desc: "体态柔和弯曲大，头间隙较短。尾尖无核。", morphology: "体长线形，细胞核散布但不到尾尖（尾尖无核区长）。" },
  { id: 48, name: "马来微丝蚴", key: "Brugia malayi microfilaria", desc: "体态僵直曲折，头间隙较长。尾尖有两枚独立的核且呈间断状排列。", morphology: "细胞核到达尾端，但末端通常有两个明显分离开的尾核。" }
];

const fallbackUrls = {
  "Giardia lamblia trophozoite": ["https://upload.wikimedia.org/wikipedia/commons/6/65/CESimon_Giardia_Trophozoite.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/a7/Giardia_trophozoites_Giemsa.tif"],
  "Giardia lamblia cyst": ["https://upload.wikimedia.org/wikipedia/commons/7/70/CESimon_Giardia_Cyst.jpg"],
  "Schistosoma japonicum adult male female": ["https://upload.wikimedia.org/wikipedia/commons/3/31/Schistosoma_Japonicum_slide.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/fb/Schistosomiasis_Life_Cycle.png"],
  "Schistosoma japonicum egg": ["https://upload.wikimedia.org/wikipedia/commons/1/14/Schistosoma_japonicum_eggs_microscope_slide_%28MIS_99-5576-2%29%2C_National_Museum_of_Health_and_Medicine_%283607891591%29.jpg"],
  "Fasciolopsis buski adult": ["https://upload.wikimedia.org/wikipedia/commons/7/73/Fasciolopsis_buski_adult_GA.jpg"],
  "Enterobius vermicularis egg": ["https://upload.wikimedia.org/wikipedia/commons/1/17/Evermiculariseggs.jpg"]
};

// For stages that don't have enough images, add Wikipedia searches
async function fetchWikiImages(key) {
  try {
      const res = await fetch('https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&generator=search&gsrnamespace=6&gsrlimit=2&gsrsearch=filetype:bitmap ' + encodeURIComponent(key));
      const json = await res.json();
      if(json.query && json.query.pages) {
         return Object.values(json.query.pages).map(p => p.imageinfo && p.imageinfo[0] && p.imageinfo[0].url).filter(Boolean);
      }
  } catch(e) {}
  return [];
}

async function doWork() {
  const categories = [
    { id: "protozoa", name: "原虫类 (Protozoa)", parasites: [] },
    { id: "trematodes", name: "吸虫类 (Trematodes)", parasites: [] },
    { id: "cestodes", name: "绦虫类 (Cestodes)", parasites: [] },
    { id: "nematodes", name: "线虫类 (Nematodes)", parasites: [] }
  ];

  for (const m of mapping) {
     let urls = imageIndex[m.key] || [];
     if(urls.length < 2 && fallbackUrls[m.key]) {
       urls = Array.from(new Set([...urls, ...fallbackUrls[m.key]]));
     }
     
     if (urls.length < 2) {
       let u = await fetchWikiImages(m.key);
       urls = Array.from(new Set([...urls, ...u]));
     }
     
     if (urls.length === 0) urls = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"];
     if (urls.length === 1) urls.push(urls[0]);

     const item = {
        id: `s_${m.id}`,
        name: `${m.id}. ${m.name}`,
        searchTerm: m.key,
        imageUrls: urls.slice(0, 2),
        morphology: m.morphology,
        keyPoints: m.desc
     };
     
     if (m.id <= 12) categories[0].parasites.push(item);
     else if (m.id <= 22) categories[1].parasites.push(item);
     else if (m.id <= 31) categories[2].parasites.push(item);
     else categories[3].parasites.push(item);
  }
  
  const fd = fs.openSync(__dirname + '/src/data.ts', 'w');
  fs.writeSync(fd, "import { ParasiteCategory } from './types';\n\n");
  fs.writeSync(fd, "export const parasiteData: ParasiteCategory[] = ");
  fs.writeSync(fd, JSON.stringify(categories, null, 2));
  fs.writeSync(fd, ";\n");
  fs.closeSync(fd);
}

doWork().then(() => console.log('Done')).catch(console.error);
