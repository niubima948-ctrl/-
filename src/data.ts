import { Parasite } from './types';

export const parasiteData: Parasite[] = [
  {
    "id": "p1",
    "category": "医学原虫",
    "chineseName": "溶组织内阿米巴",
    "scientificName": "Entamoeba histolytica",
    "description": "引起阿米巴痢疾",
    "stages": [
      {
        "id": "stage_1",
        "name": "1. 溶组织内阿米巴包囊",
        "searchTerm": "Entamoeba histolytica cyst",
        "imageUrls": [
          "/custom_images/包囊.png",
          "/custom_images/溶组织内阿米巴包囊及滋养体（苏木素染色）.jpg",
          "/custom_images/溶组织内阿米巴单核包囊.JPG",
          "/custom_images/溶组织内阿米巴双核包囊.JPG",
          "/custom_images/溶组织内阿米巴四核包囊.JPG"
        ],
        "morphology": "圆球形，大小10~20μm。成熟包囊含有4个核，未成熟包囊有1或2个核。核的结构与滋养体相似，有中心体和染色质粒。胞质内常可见棒状的拟染色体。",
        "keyPoints": "呈圆球形，暗褐色（碘染），成熟包囊内有4个典型的阿米巴核；可见棒状拟染色体。"
      },
      {
        "id": "stage_2",
        "name": "2. 溶组织内阿米巴滋养体",
        "searchTerm": "Entamoeba histolytica trophozoite",
        "imageUrls": [
          "/custom_images/溶组织内阿米巴滋养体 (2).jpg",
          "/custom_images/溶组织内阿米巴滋养体.jpg",
          "/custom_images/溶组织内阿米巴滋养体2.jpg",
          "/custom_images/阿-大滋.jpg",
          "/custom_images/阿-小滋.jpg"
        ],
        "morphology": "大小常在10~40μm之间，内外质分界明显。内质呈颗粒状，常含有被吞噬的红细胞。核形圆，核膜内缘有一层微小均匀、排列整齐的染色质粒；核中央有一个小而圆的核仁（中心体）。体表常有单一的伪足突出。",
        "keyPoints": "内外质分界明显，内质常吞噬有红细胞。细胞核具有位于中央的点状核仁（中心体），核膜内缘有排列整齐的染色质粒。"
      }
    ]
  },
  {
    "id": "p2",
    "category": "医学原虫",
    "chineseName": "阴道毛滴虫",
    "scientificName": "Trichomonas vaginalis",
    "description": "引致滴虫性阴道炎",
    "stages": [
      {
        "id": "stage_3",
        "name": "3. 阴道毛滴虫滋养体",
        "searchTerm": "Trichomonas vaginalis trophozoite",
        "imageUrls": [
          "/custom_images/阴道毛滴虫滋养体1.jpg",
          "/custom_images/阴道毛滴虫滋养体2.jpg",
          "/custom_images/阴道毛滴虫滋养体3.jpg"
        ],
        "morphology": "呈倒置的梨形或椭圆形，长10~30μm。前端有4根前鞭毛，体侧有波动膜（长度约为虫体的1/2至2/3）。有一根轴柱贯穿虫体由后端伸出。核呈椭圆形，位于虫体前部。",
        "keyPoints": "梨形虫体，前端有4根鞭毛；侧面有波动膜（占体长1/2~2/3）；一条轴柱向后贯穿虫体并伸出尾端。"
      }
    ]
  },
  {
    "id": "p3",
    "category": "医学原虫",
    "chineseName": "蓝氏贾第鞭毛虫",
    "scientificName": "Giardia lamblia",
    "description": "引起贾第虫病，具有标志性的对称人脸结构",
    "stages": [
      {
        "id": "stage_4",
        "name": "4. 蓝氏贾第鞭毛虫滋养体",
        "searchTerm": "Giardia lamblia trophozoite",
        "imageUrls": [
          "/custom_images/19_1194_28402d5bc52392e.jpg",
          "/custom_images/蓝氏甲第鞭毛虫滋养体1.jpg",
          "/custom_images/蓝氏贾第鞭毛虫滋养体2.jpg",
          "/custom_images/蓝氏贾第鞭毛虫滋养体4.jpg"
        ],
        "morphology": "外形呈纵切的半个梨形，前端宽，后端尖。长10~20μm。背面隆起面腹面扁平。腹面前半部有吸盘。对称排列有2个细胞核、两条轴柱和4对鞭毛（前、后、腹、尾各一对）。从正面看犹如生气的猴子脸或猫头鹰。",
        "keyPoints": "形似半个梨，由两侧对称的两套胞器组成：前端具有一对形似“眼睛”的吸盘及包裹在内的两个细胞核，共有4对鞭毛，整体外观呈“猫头鹰脸”样。"
      },
      {
        "id": "stage_5",
        "name": "5. 蓝氏贾第鞭毛虫包囊",
        "searchTerm": "Giardia lamblia cyst",
        "imageUrls": [
          "/custom_images/蓝氏贾第鞭毛虫包囊.jpg"
        ],
        "morphology": "呈椭圆形，大小约8~14μm，囊壁较厚且与虫体之间常有间隙。成熟包囊内有4个核，多偏于一端。囊内可见有鞭毛、轴柱及吸盘边缘等结构的遗迹。",
        "keyPoints": "椭圆形厚壁包囊，脱囊间隙明显。内部含有2~4个偏于一端的细胞核，且可见到呈“S”形的轴柱残痕。"
      }
    ]
  },
  {
    "id": "p4",
    "category": "医学原虫",
    "chineseName": "杜氏利什曼原虫",
    "scientificName": "Leishmania donovani",
    "description": "引起黑热病，在巨噬细胞内繁殖",
    "stages": [
      {
        "id": "stage_6",
        "name": "6. 杜氏利什曼原虫无鞭毛体",
        "searchTerm": "Leishmania donovani amastigote",
        "imageUrls": [
          "/custom_images/杜-无鞭毛体.jpg",
          "/custom_images/杜无.jpg",
          "/custom_images/杜氏利什曼原虫无鞭毛体.jpg"
        ],
        "morphology": "寄生于巨噬细胞内，呈卵圆形，大小为2~5μm，无游离鞭毛。经吉氏染色后胞质呈浅蓝色，胞核紫红色较大，偏于一端。在核旁有一杆状或点状的动基体，染色较深。",
        "keyPoints": "主要寄生在巨噬细胞内；外形呈微团状（利杜体），内含明显的一大一小两个紫红色颗粒结构（大的是细胞核，小而深的是动基体）。"
      },
      {
        "id": "stage_7",
        "name": "7. 杜氏利什曼原虫前鞭毛体",
        "searchTerm": "Leishmania donovani promastigote",
        "imageUrls": [
          "/custom_images/杜氏利什曼原虫前鞭毛体1.jpg",
          "/custom_images/杜氏利氏曼原虫前鞭毛体2.jpg"
        ],
        "morphology": "寄生于白蛉消化道或在培养基中。呈纺锤形，大小为10~20μm 长。细胞核位于虫体中央，动基体位于虫体最前端，且从前端发出一条游离的鞭毛，单根长鞭毛甚至可等同或超过体长。",
        "keyPoints": "呈细瘦修长的纺锤形，核居中央；前端生有动基体并向外伸出一根与体长相近的单鞭毛。"
      }
    ]
  },
  {
    "id": "p5",
    "category": "医学原虫",
    "chineseName": "间日疟原虫",
    "scientificName": "Plasmodium vivax",
    "description": "引起间日疟，感染年轻红细胞",
    "stages": [
      {
        "id": "stage_8",
        "name": "8. 间日疟原虫环状体",
        "searchTerm": "Plasmodium vivax ring",
        "imageUrls": [
          "/custom_images/间日疟原虫环状体1.jpg",
          "/custom_images/间日疟原虫环状体2.png",
          "/custom_images/间日疟原虫环状体3.jpg",
          "/custom_images/间日疟原虫环状体4.jpg"
        ],
        "morphology": "红细胞呈现正常大小。寄生虫体呈现为约占红细胞直径1/3的小环状。胞质（环）呈蓝色，染色质结（核）呈红色点状，通常为1个核。红细胞内一般不出现明显改变。",
        "keyPoints": "虫体呈微小的指环状（浅蓝色），带有一个红色的染色质点。寄生的红细胞无明显胀大改变。"
      },
      {
        "id": "stage_9",
        "name": "9. 间日疟原虫滋养体",
        "searchTerm": "Plasmodium vivax trophozoite",
        "imageUrls": [
          "/custom_images/外周血中的间日疟原虫滋养体、裂殖体及孢子体（吉氏染色）.jpg",
          "/custom_images/外周血中的间日疟原虫滋养体（吉氏染色）.jpg",
          "/custom_images/间日疟原虫.jpg",
          "/custom_images/间日疟原虫大滋养体1.jpg",
          "/custom_images/间日疟原虫大滋养体2.jpg",
          "/custom_images/间日疟原虫大滋养体3.jpg"
        ],
        "morphology": "寄生的红细胞开始变大、颜色变浅，内部常常出现粉红色薛氏小点（Schüffner's dots）。虫体增大呈现不规则阿米巴样扩展，胞质增多且常有伪足。胞质内开始出现黄褐色的疟色素。",
        "keyPoints": "虫体呈不规则阿米巴状活跃伪足，胞体内产生黄褐色疟色素；寄生的红细胞显著胀大并出现细小的粉红色“薛氏点”。"
      },
      {
        "id": "stage_10",
        "name": "10. 间日疟原虫成熟裂殖体",
        "searchTerm": "Plasmodium vivax schizont",
        "imageUrls": [
          "/custom_images/外周血中的间日疟原虫裂殖体及孢子体（吉氏染色）.jpg",
          "/custom_images/间日疟原虫成熟裂值体1.jpg",
          "/custom_images/间日疟原虫成熟裂值体2.jpg",
          "/custom_images/间日疟原虫成熟裂殖体3.png",
          "/custom_images/间日疟原虫裂殖体1.jpg",
          "/custom_images/间日疟原虫裂殖体2.jpg"
        ],
        "morphology": "寄生的红细胞明显胀大变脆。内部的疟原虫裂殖子分裂成熟，通常产生12~24个（平均16个）裂殖子，它们常不规则地排列在红细胞内或排列成菊花状。疟色素常集中于一侧或中央。",
        "keyPoints": "寄生红细胞明显变大；内含12~24个较松散排列的裂殖子体；疟色素块集中凝结成束或团块。"
      }
    ]
  },
  {
    "id": "p6",
    "category": "医学原虫",
    "chineseName": "恶性疟原虫",
    "scientificName": "Plasmodium falciparum",
    "description": "引起恶性疟，有新月形配子体",
    "stages": [
      {
        "id": "stage_11",
        "name": "11. 恶性疟原虫环状体",
        "searchTerm": "Plasmodium falciparum ring",
        "imageUrls": [
          "/custom_images/ybnex006_fixed.jpg",
          "/custom_images/恶心虐2.jpg",
          "/custom_images/恶性疟原虫.jpg",
          "/custom_images/恶性疟原虫环状体.jpg"
        ],
        "morphology": "环细小，约为红细胞直径的1/5到1/6。一个红细胞内常有多个环状体寄生，核点可有1到2个。常可观察到贴着细胞膜边缘寄生的“边缘型”环状体。",
        "keyPoints": "环状体极细小精致；单个红细胞内常常多发感染（多个环）；常具有两个红色核点，可见“边缘寄生”形态。"
      },
      {
        "id": "stage_12",
        "name": "12. 恶性疟原虫雌雄配子体",
        "searchTerm": "Plasmodium falciparum gametocyte",
        "imageUrls": [
          "/custom_images/外周血中的恶性疟原虫配子体(吉氏染色).jpg",
          "/custom_images/恶性疟原虫配子体.jpg",
          "/custom_images/恶性疟原虫雄配子体.jpg",
          "/custom_images/恶性疟原虫雌配子体.jpg",
          "/custom_images/恶性疟原虫雌雄配子体.jpg",
          "/custom_images/雄.jpg",
          "/custom_images/雌.jpg"
        ],
        "morphology": "外围血中仅可见到此阶段。呈现典型的“香蕉形”或“新月形”。雌配子体修长，两端较尖，细胞核小且致密，疟色素围绕核周；雄配子体较短粗，两端钝圆，核大而疏松，疟色素散在。",
        "keyPoints": "最具特征性的“新月形”或“香蕉状”外观，散在红细胞外；疟色素明显沉积分布于中段核区附近。"
      }
    ]
  },
  {
    "id": "p7",
    "category": "医学吸虫",
    "chineseName": "华支睾吸虫 (肝吸虫)",
    "scientificName": "Clonorchis sinensis",
    "description": "寄生于胆管，形如葵花籽",
    "stages": [
      {
        "id": "stage_13",
        "name": "13. 肝吸虫虫卵",
        "searchTerm": "Clonorchis sinensis egg",
        "imageUrls": [
          "/custom_images/华支睾吸虫虫卵1.jpg",
          "/custom_images/华支睾吸虫虫卵2.jpg",
          "/custom_images/肝吸虫.jpg",
          "/custom_images/肝吸虫卵.jpg"
        ],
        "morphology": "人体寄生虫卵中最小者（27~35μm × 12~20μm），外形呈老式瓜子形或芝麻状，黄褐色。一端有明显的卵盖，盖与卵壳交接处有肩峰（突起）。另一端有小疣状突起。内含发育成熟的毛蚴。",
        "keyPoints": "极小的芝麻状卵、黄褐色；前端具卵盖及接合处“肩峰”，后端带一逗号样“小疣”。内含毛蚴。"
      },
      {
        "id": "stage_14",
        "name": "14. 肝吸虫成虫",
        "searchTerm": "Clonorchis sinensis adult",
        "imageUrls": [
          "/custom_images/19_1194_4fd74aab5a0d7f3.jpg",
          "/custom_images/华支睾吸虫成虫1.jpg",
          "/custom_images/华支睾吸虫成虫2.jpg",
          "/custom_images/华支睾吸虫成虫3.jpg",
          "/custom_images/肝吸虫 (2).jpg"
        ],
        "morphology": "虫体扁平呈葵花籽状，半透明，长10~25mm。口吸盘略大于腹吸盘，腹吸盘位于虫体前1/5处。重要特征：后1/3处有两个呈树枝状高度分支的睾丸，前后排列。",
        "keyPoints": "扁平半透明葵花籽状；腹吸盘靠近体前端；后部具有前后排列的“两棵具有高度细分支的树干状睾丸”。"
      }
    ]
  },
  {
    "id": "p8",
    "category": "医学吸虫",
    "chineseName": "卫氏并殖吸虫 (肺吸虫)",
    "scientificName": "Paragonimus westermani",
    "description": "寄生于肺部，形如咖啡豆",
    "stages": [
      {
        "id": "stage_15",
        "name": "15. 肺吸虫虫卵",
        "searchTerm": "Paragonimus westermani egg",
        "imageUrls": [
          "/custom_images/20.肺吸虫卵.jpg",
          "/custom_images/卫氏并殖吸虫虫卵1.jpg",
          "/custom_images/卫氏并殖吸虫虫卵2.jpg",
          "/custom_images/卫氏并殖吸虫虫卵3.jpg",
          "/custom_images/卫氏并殖吸虫虫卵4.jpg",
          "/custom_images/卫氏并殖吸虫虫卵5.jpg"
        ],
        "morphology": "金黄色椭圆大卵（约80~118μm）。特征是左右不对称，一端有一稍微偏斜的大卵盖。无盖端的卵壳常有明显的增厚。内部尚未发育成熟，含1个卵细胞和若干卵黄细胞。",
        "keyPoints": "显眼的金黄色，体型不对称（一侧较平）；具有一个横且宽大的大卵盖，对侧（后极）壳皮明显增厚。"
      },
      {
        "id": "stage_16",
        "name": "16. 肺吸虫成虫",
        "searchTerm": "Paragonimus adult",
        "imageUrls": [
          "/custom_images/卫氏并殖吸虫.jpg",
          "/custom_images/卫氏并殖吸虫成虫1.jpg",
          "/custom_images/卫氏并殖吸虫成虫2.jpg",
          "/custom_images/卫氏并殖吸虫成虫3.jpg"
        ],
        "morphology": "体型宽大肥厚呈椭圆片状（切开的咖啡豆状），约7~12mm。口吸盘和腹吸盘大小相仿，腹吸盘位于中央。主要体征是其内部生殖器官极其典型地呈左右并排排列（卵巢与子宫并列，两分支睾丸并列）。",
        "keyPoints": "整体异常肥厚如半颗咖啡豆；内脏器官主要呈“左右并排分布”格局（子宫-卵巢并排，两个指状分支的睾丸并排）。"
      },
      {
        "id": "stage_17",
        "name": "17. 肺吸虫囊蚴",
        "searchTerm": "Paragonimus metacercaria",
        "imageUrls": [
          "/custom_images/卫氏并殖吸虫囊蚴1.jpg",
          "/custom_images/卫氏并殖吸虫囊蚴2.jpg"
        ],
        "morphology": "呈近圆球形，外被两层明晰囊膜。内部囊内包裹着蜷曲的幼虫。其特征性标识是体内存在一形似黑十字或星芒状的排泄囊，内含黑色排泄物颗粒。",
        "keyPoints": "具有双层囊壁的圆晶球体；内含的幼虫体中央有一异常抢眼的暗黑色“星（十）字形”排泄大囊。"
      }
    ]
  },
  {
    "id": "p9",
    "category": "医学吸虫",
    "chineseName": "日本血吸虫",
    "scientificName": "Schistosoma japonicum",
    "description": "雌雄异体，寄生于肠系膜静脉",
    "stages": [
      {
        "id": "stage_18",
        "name": "18. 日本血吸虫虫卵",
        "searchTerm": "Schistosoma japonicum egg",
        "imageUrls": [
          "/custom_images/DSC00869.JPG",
          "/custom_images/日本血吸虫虫卵1.jpg",
          "/custom_images/日本血吸虫虫卵2.jpg",
          "/custom_images/日本血吸虫虫卵3.jpg",
          "/custom_images/血吸卵-1.jpg",
          "/custom_images/血吸卵-2.jpg"
        ],
        "morphology": "淡黄色，呈宽椭圆形。没有卵盖，壳薄。虫卵一侧的中间略下处常带有一般大小的短刺，称为“侧棘”。内部含有一发育成熟的毛蚴，毛蚴周围常附着分泌物。",
        "keyPoints": "淡黄色无盖宽椭圆卵，内含毛蚴；其卵壳靠侧边的基部带有一枚非常标志性的细小“侧棘”。"
      },
      {
        "id": "stage_19",
        "name": "19. 日本血吸虫成虫",
        "searchTerm": "Schistosoma japonicum adult male female",
        "imageUrls": [
          "/custom_images/DSC00874.JPG",
          "/custom_images/日本血吸虫.jpg",
          "/custom_images/日本血吸虫雌雄合抱体1.jpg",
          "/custom_images/日本血吸虫雌雄合抱体2.jpg",
          "/custom_images/血吸虫-1.jpg",
          "/custom_images/血吸虫雌虫.jpg"
        ],
        "morphology": "雌雄异体。雄虫相对粗短，呈乳白色，虫体向腹面卷曲融合成纵长槽形的抱雌沟；雌虫细长深褐色呈圆柱状。正常状态下雌虫居于雄虫抱雌沟内，呈独特的雌雄合抱状。",
        "keyPoints": "雌雄异体，雄短粗白、雌细长褐；典型的“雌性居于雄性抱雌沟内”的合抱伴生姿态。"
      },
      {
        "id": "stage_20",
        "name": "20. 日本血吸虫尾蚴",
        "searchTerm": "Schistosoma cercaria",
        "imageUrls": [
          "/custom_images/040.jpg",
          "/custom_images/日本血吸虫尾蚴.jpg",
          "/custom_images/血吸虫尾蚴1.jpg"
        ],
        "morphology": "分为体部和尾部两体段，体前端有钻穿腺头器。其尾部呈现长形，且在远端呈现显著的分支岔裂，因这种形态被称为分叉式的叉尾型尾蚴。",
        "keyPoints": "尾端末端呈明显“等长分叉”（叉尾型）是其穿透人皮肤前的特有标志。"
      }
    ]
  },
  {
    "id": "p10",
    "category": "医学吸虫",
    "chineseName": "布氏姜片吸虫 (姜片虫)",
    "scientificName": "Fasciolopsis buski",
    "description": "最大的肠道寄生吸虫",
    "stages": [
      {
        "id": "stage_21",
        "name": "21. 姜片虫成虫",
        "searchTerm": "Fasciolopsis buski adult",
        "imageUrls": [
          "/custom_images/布氏姜片吸虫.jpg",
          "/custom_images/布氏姜片吸虫成虫.jpg"
        ],
        "morphology": "人体寄生的最大吸虫（可达20~75mm），呈肉红色，极其肥厚，外观很像切片生姜。腹吸盘呈漏斗状，远大于口吸盘且彼此十分靠近。两枝高度分支的珊瑚状大睾丸以前后排列充满后半部。",
        "keyPoints": "人体最大吸虫，肥厚呈“厚生姜片”样；腹吸盘极大并紧靠前开口，下半截具两个极巨大的树枝形大睾丸。"
      },
      {
        "id": "stage_22",
        "name": "22. 姜片虫虫卵",
        "searchTerm": "Fasciolopsis buski egg",
        "imageUrls": [
          "/custom_images/姜片卵-2.jpg",
          "/custom_images/布氏姜片吸虫卵.jpg",
          "/custom_images/布氏姜片吸虫虫卵.jpg"
        ],
        "morphology": "人体肠道中最大寄生虫卵（约130~140μm）。淡黄色呈长椭圆。前端有一较小且不明显的卵盖。壳薄，几乎由单层膜构成。内充满着大量粗糙颗粒状卵黄细胞。",
        "keyPoints": "形体极度巨大的淡黄薄壳卵；卵盖较小且不明显；充满着分布均匀且排列密实的粗颗粒卵黄细胞。"
      }
    ]
  },
  {
    "id": "p11",
    "category": "医学绦虫",
    "chineseName": "带绦虫卵",
    "scientificName": "Taenia egg",
    "description": "猪带和牛带绦虫卵形态一致",
    "stages": [
      {
        "id": "stage_23",
        "name": "23. 带绦虫虫卵",
        "searchTerm": "Taenia egg",
        "imageUrls": [
          "/custom_images/044.jpg",
          "/custom_images/不完整带绦虫卵.jpg",
          "/custom_images/带绦虫卵1.jpg",
          "/custom_images/带绦虫卵2.jpg",
          "/custom_images/带绦虫卵3.jpg",
          "/custom_images/带绦虫卵4.jpg",
          "/custom_images/猪带绦虫卵.jpg"
        ],
        "morphology": "呈圆球形或近球形，直径约31~43μm，深棕黄色。具有非常厚实发达的胚膜，胚膜表面分布有清晰的放射状条纹。胚膜内包含有一具三对小钩的六钩蚴胚胎。",
        "keyPoints": "具有独特车轮状放射细纹的极其厚实的深棕黄色外壁（胚膜），中间可见六片小钩形成的六钩蚴胚。"
      }
    ]
  },
  {
    "id": "p12",
    "category": "医学绦虫",
    "chineseName": "链状带绦虫 (猪带绦虫)",
    "scientificName": "Taenia solium",
    "description": "可引起绦虫病和囊虫病",
    "stages": [
      {
        "id": "stage_24",
        "name": "24. 猪带绦虫头节",
        "searchTerm": "Taenia solium scolex",
        "imageUrls": [
          "/custom_images/045.jpg",
          "/custom_images/DSC00884.JPG",
          "/custom_images/猪带绦虫幼虫和妊娠节片.jpg",
          "/custom_images/链状带绦虫成虫头节.jpg"
        ],
        "morphology": "头部呈小圆球形状。其最宽处有4个对称的圆形吸盘。头节的顶点具有向外突出的“顶突”，其上整齐交叠着两圈角质小钩（25~50个状如皇冠）。",
        "keyPoints": "不仅具四个圆吸盘，头顶更配备有具两圈小弯刺的凸起物（“顶突及顶刺钩”），形如小皇冠。"
      },
      {
        "id": "stage_25",
        "name": "25. 猪带绦虫成节",
        "searchTerm": "Taenia solium proglottid",
        "imageUrls": [
          "/custom_images/链状带绦虫成虫.jpg",
          "/custom_images/链状带绦虫成虫成节.jpg"
        ],
        "morphology": "节片宽扁，雌雄同体。卵巢位于后部两侧，具有三大叶片（左右两大多叶，且在靠近生殖孔一侧生有一个特殊的较小中央第三附叶）。睾丸滤泡数约为150-200个。",
        "keyPoints": "典型的“卵巢分三叶”特性（左右两大叶之间存在一个中央小附叶），鉴别猪带成节的唯一金标准。"
      },
      {
        "id": "stage_26",
        "name": "26. 猪带绦虫孕节",
        "searchTerm": "Taenia solium gravid proglottid",
        "imageUrls": [
          "/custom_images/猪绦孕-1.jpg",
          "/custom_images/链状带绦虫成虫孕节.jpg"
        ],
        "morphology": "节片明显被拉成长方形（长大于宽）。子宫极其粗大充满虫卵，主干居中，自中心向两旁分支。其向每侧发出第一级分支很少，仅约 7~13 支，分支粗大树枝状。",
        "keyPoints": "长宽拉长的长方形矩形节片；“子宫中干一侧生长出的一级分支数目很少（仅7-13支）”，多呈粗直分支状。"
      },
      {
        "id": "stage_27",
        "name": "27. 猪带绦虫囊尾蚴",
        "searchTerm": "Taenia solium cysticercus",
        "imageUrls": [
          "/custom_images/链状带绦虫囊尾蚴 3.jpg",
          "/custom_images/链状带绦虫囊尾蚴1.jpg",
          "/custom_images/链状带绦虫囊尾蚴2.jpg",
          "/custom_images/链状带绦虫囊尾蚴3.jpg",
          "/custom_images/链状带绦虫囊尾蚴4.jpg"
        ],
        "morphology": "呈半透明椭圆囊泡（如白豆大）。囊壁上有向内深凹反卷陷入包裹的一个完全具备成虫头节全部特征（不仅有4个吸盘更带有小顶突与顶钩结构）的实心小头节晶点。",
        "keyPoints": "乳白半透明小囊，内含有向反折入内的微小“头节（含皇冠状顶突及小钩）”。"
      }
    ]
  },
  {
    "id": "p13",
    "category": "医学绦虫",
    "chineseName": "肥胖带绦虫 (牛带绦虫)",
    "scientificName": "Taenia saginata",
    "description": "只引起绦虫病，较长",
    "stages": [
      {
        "id": "stage_28",
        "name": "28. 牛带绦虫头节",
        "searchTerm": "Taenia saginata scolex",
        "imageUrls": [
          "/custom_images/046.jpg",
          "/custom_images/DSC00887.JPG",
          "/custom_images/肥胖带绦虫成虫头节.jpg"
        ],
        "morphology": "头部近似立方形或短梨形，侧面四角设有四个较大的肌肉吸盘。其整个顶端光秃平坦，既不生长任何隆起的顶突结构，也完全没有一根角质小钩子（秃顶或平顶状）。",
        "keyPoints": "呈四吸盘方形头，无顶突、更“无任何顶端小钩”。秃平的头端是与带钩猪带区分的基础。"
      },
      {
        "id": "stage_29",
        "name": "29. 牛带绦虫成节",
        "searchTerm": "Taenia saginata proglottid",
        "imageUrls": [
          "/custom_images/肥胖带绦虫成虫.jpg",
          "/custom_images/肥胖带绦虫成虫成节.jpg"
        ],
        "morphology": "近似正方形或长方形比成节。雌雄性器同体中，位于后侧底部的卵巢呈现经典标准的相互对称左右结构：“仅仅只生有分左右各两大瓣单叶”。不再有多余发出的第三片附小叶。含约300~400颗繁密微睾丸。",
        "keyPoints": "完全对应于猪带的区分，此牛带成节解剖后“仅具有卵巢左右分离的正二叶（两瓣叶）结构”，没有第三小叶簇。"
      },
      {
        "id": "stage_30",
        "name": "30. 牛带绦虫孕节",
        "searchTerm": "Taenia saginata gravid proglottid",
        "imageUrls": [
          "/custom_images/肥胖带绦虫成虫孕节1.jpg",
          "/custom_images/肥胖带绦虫成虫孕节2.jpg",
          "/custom_images/肥胖带绦虫成虫孕节3.jpg"
        ],
        "morphology": "孕结节常呈重度纵向伸长的狭长粗条状。其中贯穿整节体的轴心生殖子宫因为大负荷被挤出巨多子宫主分支。从中心直线干上，其单边发端第一分级分支达到了夸张高度浓密甚至往往数多高达 15~30 枝以上，十分繁杂茂密如帚一样重叠。",
        "keyPoints": "非常极修长的长面狭条孕节片段，由于它“每边子宫分支树干发出高达 15 到甚至 30 个极其集茂且多级的支系”，显呈丛密树柳的典型扫帚分支外观界线。"
      },
      {
        "id": "stage_31",
        "name": "31. 牛带绦虫囊尾蚴",
        "searchTerm": "Taenia saginata cysticercus",
        "imageUrls": [],
        "morphology": "与猪囊尾蚴近似大小，呈椭圆形。同样囊膜下陷入了一个头节，但是此未成熟发育内卷的头节也是完全缺失顶突和小钩武装，仅仅只能观察得到4个微小吸盘圆口形状。",
        "keyPoints": "内含向内部翻转只拥有基本吸盘结构，但不具有顶端任何顶钩冠刺的无武装幼头节。"
      }
    ]
  },
  {
    "id": "p14",
    "category": "医学线虫",
    "chineseName": "似蚓蛔线虫 (蛔虫)",
    "scientificName": "Ascaris lumbricoides",
    "description": "最大的肠道线虫，寄生于小肠",
    "stages": [
      {
        "id": "stage_32",
        "name": "32. 受精蛔虫卵",
        "searchTerm": "Ascaris lumbricoides fertilized egg",
        "imageUrls": [
          "/custom_images/DSC00627.JPG",
          "/custom_images/似蚓蛔线虫感染期虫卵.jpg",
          "/custom_images/似蚓蛔线虫虫卵1.jpg",
          "/custom_images/受精蛔虫卵.jpg",
          "/custom_images/蛔受精-1.jpg",
          "/custom_images/蛔受精-2.jpg"
        ],
        "morphology": "宽椭圆形，大小约45~75μm，表面由一层凹凸不平、厚且粗糙的蛋白质膜包裹（常被胆汁染成典型的黄棕色或棕色）。内壁有一层极厚的透明卵层。正常新鲜期排出含有单个中心完整的圆形大卵细胞，两端存在月牙形空隙。",
        "keyPoints": "宽阔粗放的宽椭卵，具有最具鉴表型的“棕黄色的波浪状（裙边）粗糙蛋白外膜结构”，具有非常鲜明的双端新月空气隙空间。"
      },
      {
        "id": "stage_33",
        "name": "33. 未受精蛔虫卵",
        "searchTerm": "Ascaris lumbricoides unfertilized egg",
        "imageUrls": [
          "/custom_images/未受精蛔虫卵1.jpg",
          "/custom_images/未受精蛔虫卵2.jpg",
          "/custom_images/蛔未精-1.jpg",
          "/custom_images/蛔未精-2.jpg"
        ],
        "morphology": "形态显著偏向更加狭长的水滴椭形状。通常因为壳内发育不成熟而导致被覆盖的粗糙表面变单薄脱落，或卵壳本身极其变薄透光。内部的非受形态由于结构不全，常常不含有大圆主细胞而只是一堆堆胡乱杂填满的折光大小粗颗粒集合体。",
        "keyPoints": "显得特别瘦及长形狭长；卵层薄且内填充缺乏正心主细胞，仅含有大量疏密不等的粗乱散布形折光油颗粒。"
      },
      {
        "id": "stage_34",
        "name": "34. 脱蛋白质膜受精蛔虫卵",
        "searchTerm": "Ascaris decorticated egg",
        "imageUrls": [],
        "morphology": "其形状、壳质的质感和囊膜及里面所有的完整形态细胞组织与特征内容完全跟基础的受精长相一致相同，唯独缺失或完全丧失包裹并在最表面的波纹黄粗糙蛋白层外衣膜。使整体变得显得无彩并呈现厚卵透明状。",
        "keyPoints": "剥脱去其波纹锯齿层之后的原受精卵态。外壁非常透净明滑或近无色光滑透状但其实含有厚坚外卵壳层。【极易误诊极像钩虫大空薄卵层，但其实要更具有壁厚度及内容不同实。】"
      },
      {
        "id": "stage_35",
        "name": "35. 蛔虫雄虫交合刺",
        "searchTerm": "Ascaris spicule",
        "imageUrls": [
          "/custom_images/交合刺.jpg",
          "/custom_images/似蚓蛔线虫雄虫尾端结构.jpg"
        ],
        "morphology": "大型线虫形圆虫的尾部后末底向腹向内卷屈形成非常特殊的单重钩形。特别能寻找和辨析的是在于根部分出口位置可由于排伸引长有往往外伸一两支长达超过常比例弯呈倒月尖指形式样、且成两对应成对分布的纤细针状游移形小指针即交合短刺状器。",
        "keyPoints": "典型的特征大段粗尾的深腹部底折曲形态，常常配合并可直视于表排外部的呈对游出的短尖呈弯“交合小指针”。"
      },
      {
        "id": "stage_36",
        "name": "36. 蛔虫唇瓣",
        "searchTerm": "Ascaris lips",
        "imageUrls": [
          "/custom_images/似蚓蛔线虫唇瓣1.jpg",
          "/custom_images/似蚓蛔线虫唇瓣2.jpg"
        ],
        "morphology": "在这个长线形身体的大头部位端口最前面的部位前端点上无吸附钩无吸盘吸管等结构，反而排列隆起了三个呈现品字的厚硕粗圆平端肉状质突起的肉叶半球体称为大唇瓣组织。",
        "keyPoints": "最前端没有任何尖牙等，有的只是长着如花瓣一样排列构成了正“品排列”形的巨大平口三肉质唇瓣堆积突肉部。"
      }
    ]
  },
  {
    "id": "p15",
    "category": "医学线虫",
    "chineseName": "钩虫",
    "scientificName": "Hookworm",
    "description": "幼虫钻皮肤感染，吸血引起贫血",
    "stages": [
      {
        "id": "stage_37",
        "name": "37. 钩虫卵",
        "searchTerm": "Hookworm egg",
        "imageUrls": [
          "/custom_images/19_1194_38cd10a5f3dcf79.jpg",
          "/custom_images/钩虫卵.jpg",
          "/custom_images/钩虫虫卵1.jpg",
          "/custom_images/钩虫虫卵2.jpg",
          "/custom_images/钩虫虫卵3.jpg",
          "/custom_images/钩虫虫卵4.jpg",
          "/custom_images/钩虫虫卵5.jpg",
          "/custom_images/钩虫虫卵6.jpg"
        ],
        "morphology": "形态常呈规则正椭球椭圆状的外壳，壳层十分透特薄特透（为单层膜层）。呈现整体完全清净水样无色全透明特大水空室状态。初次排入时常在其内部中区可见发育至正在分裂为 2、4 到 8个桑椹型团的微小卵裂多细胞球团。",
        "keyPoints": "标准完美极其超细壳壁透极且近水全白的大空无色广清形广卵层，内通常容留聚成数块的小裂核团聚体且两端拥有大广透明旷带（无物透顶大内间虚隙间）。"
      }
    ]
  },
  {
    "id": "p16",
    "category": "医学线虫",
    "chineseName": "十二指肠钩口线虫",
    "scientificName": "Ancylostoma duodenale",
    "description": "有两对尖锐钩齿",
    "stages": [
      {
        "id": "stage_38",
        "name": "38. 十二指肠钩虫口囊",
        "searchTerm": "Ancylostoma duodenale buccal",
        "imageUrls": [
          "/custom_images/19_1194_3a08ac904cc57b7.jpg",
          "/custom_images/十二指肠钩口线虫口囊.jpg",
          "/custom_images/十二指肠钩口线虫和美洲板口线虫口囊.jpg"
        ],
        "morphology": "在其头的前端形成了一个极其深且具备十分大空间腹开口大广巨角质壳化坚底空囊深杯底状杯体构造。且最令人惧怕和作为界定区别的是主要发长在它前部前直壁腹沿处。生出了足足前后各有呈尖利无比长弯向内倒的尖大钩角牙深齿各有两对总4尖。",
        "keyPoints": "形长极其深刻粗具漏杯斗底的粗骨化杯口，但最作为识别本此物种判定金基准为前腹处缘拥有弯且钩长极锐“共2对且总4枚倒反弯长尖角类钩牙”。"
      },
      {
        "id": "stage_40",
        "name": "40. 十二指肠钩虫雄虫交合伞",
        "searchTerm": "Ancylostoma duodenale bursa",
        "imageUrls": [
          "/custom_images/十二指肠钩口线虫和美洲板口线虫交合伞.jpg"
        ],
        "morphology": "雄虫尾端向腹面呈伞状膨大，形成膜质交合伞。内有肋状的肌纤维支撑。最关键的特征是其背辐肋：自基部伸出后，一直到远端才分为两支，且每支的末端又再分为三小支。",
        "keyPoints": "背辐肋远端分叉，每支末端各有三个小分支（口诀：远分叉，三小梢）。"
      }
    ]
  },
  {
    "id": "p17",
    "category": "医学线虫",
    "chineseName": "美洲板口线虫",
    "scientificName": "Necator americanus",
    "description": "有一对半月形板齿",
    "stages": [
      {
        "id": "stage_39",
        "name": "39. 美洲钩虫口囊",
        "searchTerm": "Necator americanus buccal",
        "imageUrls": [
          "/custom_images/19_1194_d54b6bf5cb8a306.jpg",
          "/custom_images/美洲板口线虫口囊.jpg"
        ],
        "morphology": "前头也具有和它近亲极为极为类似的形长十分极其深底具有开直敞阔圆空腹壁口大的十分角壳质壁囊体深大口杯结构底。但在由于鉴真最核心的前腹沿边缘处武装发生巨变：并未产生如钩子那般向内深刺入长的类针牙角，而已长生成由直接切片似呈扁大且宽宽深锐片的非常大且扁并对并一对对双生如斩新长出的半牙形大板弯长面侧斜状半月形大牙深切板组织片。",
        "keyPoints": "前缘不带有钩牙角，长取取替之生且能做直接最显著本家标识确认鉴别核心标志为唯一的一对两面对“极其向横展如宽开状面且宽削状的平深大宽半大平板侧锋板型斩月形月斜板横半片斩月月大板形齿宽且阔大薄宽”。"
      },
      {
        "id": "stage_41",
        "name": "41. 美洲钩虫雄虫交合伞",
        "searchTerm": "Necator americanus bursa",
        "imageUrls": [],
        "morphology": "雄虫交合伞与十二指肠钩虫类似，但背辐肋的结构有明显差异：背辐肋在基部极早期就分为两支，各自向远端延伸，末端分别再分为两小支。",
        "keyPoints": "背辐肋基部分叉，每支末端各有两个小分支（口诀：早分叉，两小梢）。"
      }
    ]
  },
  {
    "id": "p18",
    "category": "医学线虫",
    "chineseName": "蠕形住肠线虫 (蛲虫)",
    "scientificName": "Enterobius vermicularis",
    "description": "寄生于盲肠，夜间肛周排卵",
    "stages": [
      {
        "id": "stage_42",
        "name": "42. 蛲虫卵",
        "searchTerm": "Enterobius vermicularis egg",
        "imageUrls": [
          "/custom_images/250px-Eggs_of_Enterobius_vermicularis_5229_lores.jpg",
          "/custom_images/DSC00660.JPG",
          "/custom_images/蛲虫卵1.jpg",
          "/custom_images/蛲虫卵2.jpg",
          "/custom_images/蛲虫卵3.jpg",
          "/custom_images/蛲虫卵4.jpg",
          "/custom_images/蛲虫虫卵.jpg"
        ],
        "morphology": "无色透明，大小约为50-60μm × 20-30μm。呈不对称的椭圆形，一侧较平，另一侧较隆起，形状类似柿子核。卵壳较厚。内含一已发育成形的幼虫（蝌蚪期）。",
        "keyPoints": "不对称的椭圆形（柿核状，一侧平一侧隆起），卵壳厚而透明，内含微小幼虫。"
      },
      {
        "id": "stage_43",
        "name": "43. 蛲虫头顶部（咽管球）",
        "searchTerm": "Enterobius vermicularis adult",
        "imageUrls": [
          "/custom_images/蛲虫成虫头部1.jpg",
          "/custom_images/蛲虫成虫头部2.jpg"
        ],
        "morphology": "蛲虫成虫细小。头部角皮膨大，形成领状的双侧“头翼”（翼状突起）。食管长，其末端膨大呈一明显的正圆球形，即“咽管球”。",
        "keyPoints": "头部具有双侧“头翼”（头翼突起）；食管末端具有明显的肌肉质圆球形“咽管球”。"
      }
    ]
  },
  {
    "id": "p19",
    "category": "医学线虫",
    "chineseName": "毛首鞭形线虫 (鞭虫)",
    "scientificName": "Trichuris trichiura",
    "description": "形如马鞭，寄生于盲肠",
    "stages": [
      {
        "id": "stage_44",
        "name": "44. 鞭虫卵",
        "searchTerm": "Trichuris trichiura egg",
        "imageUrls": [
          "/custom_images/DSC00651.JPG",
          "/custom_images/鞭虫卵1.jpg",
          "/custom_images/鞭虫卵2.jpg",
          "/custom_images/鞭虫卵3.jpg",
          "/custom_images/鞭虫卵4.jpg",
          "/custom_images/鞭虫卵5.jpg",
          "/custom_images/鞭虫卵6.jpg"
        ],
        "morphology": "呈黄褐色，大小约50-54μm × 22-23μm。外形似腰鼓或纺锤形，卵壳较厚。最显著特征是卵壳的两端各有一个透明的塞状突起，称为“透明栓”。内含一个未分裂的受精卵细胞。",
        "keyPoints": "黄褐色、纺锤形（或称腰鼓形），两端各有一个透明的“透明栓”。"
      },
      {
        "id": "stage_45",
        "name": "45. 雌鞭虫成虫",
        "searchTerm": "Trichuris trichiura female",
        "imageUrls": [
          "/custom_images/雌雄鞭虫.jpg",
          "/custom_images/鞭虫雌虫1.jpg",
          "/custom_images/鞭虫雌虫2.jpg",
          "/custom_images/鞭虫雌雄成虫.jpg"
        ],
        "morphology": "外形如马鞭，前3/5呈细线状，后2/5明显变粗。雌虫尾部钝圆，平直不弯曲。体内可见单管型生殖系统，充满虫卵。",
        "keyPoints": "虫体呈马鞭状前细后粗。雌虫尾端平直，钝圆。"
      },
      {
        "id": "stage_46",
        "name": "46. 雄鞭虫成虫",
        "searchTerm": "Trichuris trichiura male",
        "imageUrls": [
          "/custom_images/19_1194_aeb45baa25dceda.jpg",
          "/custom_images/鞭虫雄虫1.jpg",
          "/custom_images/鞭虫雄虫2.jpg",
          "/custom_images/鞭虫雄虫尾端.jpg"
        ],
        "morphology": "外形类似雌虫呈马鞭状，但体积略小。最主要区别在于尾端向腹面呈明显卷曲，常可见一根单根细长的交合刺伸出。",
        "keyPoints": "虫体前细后粗。雄虫尾端向腹面卷曲，并常带有一根细长交合刺伸出体外。"
      }
    ]
  },
  {
    "id": "p20",
    "category": "医学线虫",
    "chineseName": "班氏吴策线虫",
    "scientificName": "Wuchereria bancrofti",
    "description": "引起淋巴丝虫病",
    "stages": [
      {
        "id": "stage_47",
        "name": "47. 班氏微丝蚴",
        "searchTerm": "Wuchereria bancrofti microfilaria",
        "imageUrls": [
          "/custom_images/19_1194_9f9f2ea92650404.jpg",
          "/custom_images/班氏微丝蚴1.jpg",
          "/custom_images/班氏微丝蚴2.jpg"
        ],
        "morphology": "寄生于血液中。经吉氏染色后可见透明虫鞘。虫体曲线柔和，体核大小均匀，分布较疏松。最关键的特征是其尾部较细长且无核（体核不达尾端）。",
        "keyPoints": "体态柔和；体核疏松排列；尾部纤细且末端“无尾核”。"
      }
    ]
  },
  {
    "id": "p21",
    "category": "医学线虫",
    "chineseName": "马来布鲁线虫",
    "scientificName": "Brugia malayi",
    "description": "引起淋巴丝虫病",
    "stages": [
      {
        "id": "stage_48",
        "name": "48. 马来微丝蚴",
        "searchTerm": "Brugia malayi microfilaria",
        "imageUrls": [
          "/custom_images/19_1194_b1d3d609fc7d766.jpg",
          "/custom_images/马来微丝蚴.jpg",
          "/custom_images/马来微丝蚴尾核.jpg"
        ],
        "morphology": "体态较短小，僵硬，常有不规则的折转。体核密集，相互重叠，几乎分不清界限。最关键特征是其尾部具有两个明显分离的圆形“尾核”。",
        "keyPoints": "体态僵硬、折转较多；体核排列密集；尾端具有两个明显的独立“尾核”（尾尖有一核，稍前方有一核）。"
      }
    ]
  }
];
