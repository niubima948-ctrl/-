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
        "englishName": "Entamoeba histolytica Schaudinn cyst",
        "searchTerm": "Entamoeba histolytica cyst",
        "imageUrls": [
          "/custom_images/img_1.png",
          "/custom_images/img_2.jpg",
          "/custom_images/img_3.jpg",
          "/custom_images/img_4.jpg",
          "/custom_images/img_5.jpg"
        ],
        "morphology": "1. 圆球形，直径约10~20μm。\n2. 成熟包囊含4个核，未成熟包囊含1或2个核；核结构与滋养体相同，核膜内缘有染色质粒，中央有一小而圆的核仁（中心体）。\n3. 胞质内常含有折光性强的棒状拟染色体（两端钝圆）。",
        "keyPoints": "1. 结肠内阿米巴包囊：体积较大（10~30μm），成熟包囊含8个核；拟染色体呈针状或碎片状，两端尖锐，不同于溶组织内阿米巴的棒状钝圆。\n2. 碘液染色下，溶组织内阿米巴核为4个，而结肠内阿米巴核通常为8个。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_2",
        "name": "2. 溶组织内阿米巴滋养体",
        "englishName": "Entamoeba histolytica Schaudinn trophozoite",
        "searchTerm": "Entamoeba histolytica trophozoite",
        "imageUrls": [
          "/custom_images/img_6.jpg",
          "/custom_images/img_7.jpg",
          "/custom_images/img_8.jpg",
          "/custom_images/img_9.jpg",
          "/custom_images/img_10.jpg"
        ],
        "morphology": "1. 呈不规则的阿米巴状，大小10~40μm。\n2. 活体时借助单向的、透明的伪足进行活跃的定向运动。\n3. 胞质可明显分为外质和内质：外质透明，内质呈颗粒状，常吞噬有红细胞。\n4. 细胞核1个，呈泡状核，核膜内缘有一层排列整齐的染色质粒，中央有一小而圆的核仁。",
        "keyPoints": "1. 结肠内阿米巴滋养体：体积较大（20~50μm），内外质分界不清，运动迟缓，伪足短钝，通常不吞噬红细胞（主要吞噬细菌）。\n2. 观察内质中是否含有被吞噬的红细胞是鉴别溶组织内阿米巴滋养体的重要特征。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Trichomonas vaginalis Donne trophozoite",
        "searchTerm": "Trichomonas vaginalis trophozoite",
        "imageUrls": [
          "/custom_images/img_11.jpg",
          "/custom_images/img_12.jpg",
          "/custom_images/img_13.jpg"
        ],
        "morphology": "1. 呈梨形或椭圆形，长10~30μm，无包囊期。\n2. 前端有4根前鞭毛，体侧有波动膜，其长度约为虫体的1/2。\n3. 细胞内有一根轴柱，自前端向后贯穿虫体，并从后端伸出。\n4. 细胞核1个，呈椭圆形，位于虫体前部。",
        "keyPoints": "1. 梨形虫体，前端具4根鞭毛。\n2. 侧面具有特征性的波动膜结构（占体长1/2）。\n3. 轴柱贯穿全身并自尾端伸出。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Giardia lamblia trophozoite",
        "searchTerm": "Giardia lamblia trophozoite",
        "imageUrls": [
          "/custom_images/img_14.jpg",
          "/custom_images/img_15.jpg",
          "/custom_images/img_16.jpg",
          "/custom_images/img_17.jpg"
        ],
        "morphology": "1. 正面观呈倒置的梨形，侧面观呈半月形（背面隆起，腹面扁平），大小约10~20μm。\n2. 两侧对称，具有2个椭圆形的细胞核。\n3. 腹面前半部有2个吸盘，用于吸附肠壁。\n4. 具有4对鞭毛（前、后、腹、尾各一对）及2条平行的轴柱，整体形似“猫头鹰脸”或“猴脸”。",
        "keyPoints": "1. 外观特征极强，呈两侧对称的“猫头鹰脸”样。\n2. 具有两个形似眼睛的细胞核及吸盘结构。\n3. 共有4对（8根）鞭毛和双轴柱。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_5",
        "name": "5. 蓝氏贾第鞭毛虫包囊",
        "englishName": "Giardia lamblia cyst",
        "searchTerm": "Giardia lamblia cyst",
        "imageUrls": [
          "/custom_images/img_18.jpg"
        ],
        "morphology": "1. 呈椭圆形，大小约8~14μm。\n2. 囊壁较厚，囊壁与虫体之间常存在明显的透亮间隙。\n3. 囊内可见丝状的鞭毛、轴柱及吸盘边缘等结构的遗迹。\n4. 未成熟包囊含2个核，成熟包囊含4个核，多偏于一端。",
        "keyPoints": "1. 椭圆形，囊壁厚且具有明显的“脱囊间隙”。\n2. 内部有2~4个偏向一端的细胞核。\n3. 囊内常可见“S”形的轴柱残痕。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Leishmania donovani amastigote",
        "searchTerm": "Leishmania donovani amastigote",
        "imageUrls": [
          "/custom_images/img_19.jpg",
          "/custom_images/img_20.jpg",
          "/custom_images/img_21.jpg"
        ],
        "morphology": "1. 主要寄生于哺乳动物（包括人）的巨噬细胞内，又称利杜体。\n2. 虫体极小，呈卵圆形，大小为2~5μm。\n3. 经瑞氏染液染色后，胞质呈淡蓝色，细胞核呈紫红色，较大，位于中央或偏于一端。\n4. 核旁有一杆状或点状、染色较深的动基体。",
        "keyPoints": "1. 弓形虫速殖子：弓形虫呈香蕉形或半月形，细胞核偏后，无动基体结构；而利杜体为卵圆形，且具有特征性的“一核一动基体”。\n2. 荚膜组织胞浆菌：为真菌，无动基体结构。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_7",
        "name": "7. 杜氏利什曼原虫前鞭毛体",
        "englishName": "Leishmania donovani promastigote",
        "searchTerm": "Leishmania donovani promastigote",
        "imageUrls": [
          "/custom_images/img_22.jpg",
          "/custom_images/img_23.jpg"
        ],
        "morphology": "1. 寄生于白蛉消化道或在人工培养基中。\n2. 虫体呈修长的纺锤形，大小为10~20μm。\n3. 细胞核位于虫体中央，动基体位于虫体最前端。\n4. 从前端动基体处发出一根游离的单鞭毛，鞭毛长度常与体长相近或更长。",
        "keyPoints": "1. 呈修长的纺锤形，核居中。\n2. 前端具一动基体，并向外伸出一根细长的单鞭毛。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Plasmodium vivax ring form",
        "searchTerm": "Plasmodium vivax ring",
        "imageUrls": [
          "/custom_images/img_24.jpg",
          "/custom_images/img_25.png",
          "/custom_images/img_26.jpg",
          "/custom_images/img_27.jpg"
        ],
        "morphology": "1. 寄生于红细胞内，虫体呈环状，大小约为红细胞直径的1/3。\n2. 胞质环较粗，经姬氏染色呈蓝色。\n3. 染色质结（核）通常为1个，呈红色点状。\n4. 被寄生的红细胞大小正常，颜色无明显改变。",
        "keyPoints": "1. 恶性疟环状体：环极细小（仅占红细胞直径1/5），常具有2个核点，单个红细胞内多发感染（多个环），常有边缘寄生；而间日疟环较粗大（占1/3），多为1个核点。\n2. 间日疟原虫主要寄生于网织红细胞，红细胞大小基本正常。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_9",
        "name": "9. 间日疟原虫滋养体",
        "englishName": "Plasmodium vivax trophozoite",
        "searchTerm": "Plasmodium vivax trophozoite",
        "imageUrls": [
          "/custom_images/img_28.jpg",
          "/custom_images/img_29.jpg",
          "/custom_images/img_30.jpg",
          "/custom_images/img_31.jpg",
          "/custom_images/img_32.jpg",
          "/custom_images/img_33.jpg"
        ],
        "morphology": "1. 随着虫体发育，胞质增多，伸出不规则的伪足，呈阿米巴样。\n2. 虫体内出现黄褐色的疟色素颗粒。\n3. 被寄生的红细胞显著变大、褪色。\n4. 红细胞内出现细小、分布均匀的粉红色颗粒，即薛氏点（Schüffner's dots）。",
        "keyPoints": "1. 呈不规则的阿米巴状，胞体增大，有伪足和疟色素。\n2. 宿主红细胞显著胀大变浅，并出现大量细小的粉红色“薛氏点”。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_10",
        "name": "10. 间日疟原虫成熟裂殖体",
        "englishName": "Plasmodium vivax mature schizont",
        "searchTerm": "Plasmodium vivax schizont",
        "imageUrls": [
          "/custom_images/img_34.jpg",
          "/custom_images/img_35.jpg",
          "/custom_images/img_36.jpg",
          "/custom_images/img_37.png",
          "/custom_images/img_38.jpg",
          "/custom_images/img_39.jpg"
        ],
        "morphology": "1. 裂殖体充塞胀大的红细胞，内部的裂殖子发育成熟。\n2. 裂殖子数目常为12~24个（平均16个），排列不甚规则或呈菊花状。\n3. 疟色素常集中凝结成块状，分布于一侧或中央。\n4. 寄生红细胞极度胀大，薛氏点依然可见。",
        "keyPoints": "1. 恶性疟成熟裂殖体：裂殖子数目较多（8~36个），排列紧密，但外周血中极难见到；间日疟裂殖子数目为12~24个，排列较松散，外周血易见。\n2. 寄生红细胞明显胀大。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Plasmodium falciparum ring form",
        "searchTerm": "Plasmodium falciparum ring",
        "imageUrls": [
          "/custom_images/img_40.jpg",
          "/custom_images/img_41.jpg",
          "/custom_images/img_42.jpg",
          "/custom_images/img_43.jpg"
        ],
        "morphology": "1. 环极细小，约占红细胞直径的1/5到1/6。\n2. 胞质环纤细，核点（染色质结）常为1~2个。\n3. 同一个红细胞内常有多个环状体寄生（复感染）。\n4. 常可见虫体紧贴红细胞膜寄生的现象，称为“边缘型”。",
        "keyPoints": "1. 间日疟环状体：环粗大（占1/3），通常1个核，少见复感染和边缘寄生；恶性疟环细小，多发感染多见，常有2个核点及边缘寄生现象。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_12",
        "name": "12. 恶性疟原虫雌雄配子体",
        "englishName": "Plasmodium falciparum gametocyte",
        "searchTerm": "Plasmodium falciparum gametocyte",
        "imageUrls": [
          "/custom_images/img_44.jpg",
          "/custom_images/img_45.jpg",
          "/custom_images/img_46.jpg",
          "/custom_images/img_47.jpg",
          "/custom_images/img_48.jpg",
          "/custom_images/img_49.jpg",
          "/custom_images/img_50.jpg"
        ],
        "morphology": "1. 恶性疟在外周血中通常只能见到环状体和配子体。\n2. 雌配子体呈新月形或香蕉形，两端较尖；细胞核小而致密，疟色素集中在核周。\n3. 雄配子体较短粗，呈腊肠形，两端钝圆；细胞核大而疏松，疟色素散在分布。",
        "keyPoints": "1. 间日疟配子体：呈圆形或椭圆形，寄生红细胞胀大；恶性疟配子体：呈特征性的新月形或香蕉形，是诊断恶性疟的金标准。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Clonorchis sinensis egg",
        "searchTerm": "Clonorchis sinensis egg",
        "imageUrls": [
          "/custom_images/img_51.jpg",
          "/custom_images/img_52.jpg",
          "/custom_images/img_53.jpg",
          "/custom_images/img_54.jpg"
        ],
        "morphology": "1. 体积极小（人体寄生虫卵中最小者），大小约27~35μm × 12~20μm。\n2. 外形似芝麻或老式瓜子，黄褐色。\n3. 卵壳较厚，前端较窄，有一个明显的卵盖；卵盖与卵壳交接处有增厚的突起，称为“肩峰”。\n4. 卵的后端较钝圆，其末端有一个小疣状突起。\n5. 卵内含有一条发育成熟的毛蚴。",
        "keyPoints": "1. 异形吸虫卵：大小和形态与肝吸虫卵极为相似，但其卵盖不够明显，肩峰较小，后端常无小疣状突起，鉴别需仔细高倍镜观察。\n2. 肝吸虫卵的核心标志：最小卵、芝麻状、有肩峰、后端有小疣。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_14",
        "name": "14. 肝吸虫成虫",
        "englishName": "Clonorchis sinensis adult",
        "searchTerm": "Clonorchis sinensis adult",
        "imageUrls": [
          "/custom_images/img_55.jpg",
          "/custom_images/img_56.jpg",
          "/custom_images/img_57.jpg",
          "/custom_images/img_58.jpg",
          "/custom_images/img_59.jpg"
        ],
        "morphology": "1. 虫体狭长，扁平如葵花籽状，半透明，长约10~25mm。\n2. 口吸盘略大于腹吸盘，腹吸盘位于虫体前1/5处。\n3. 消化道分为两支盲管，下行至近尾端，无肛门。\n4. 生殖系统发达，最显著特征是体后1/3处有两个呈树枝状高度分支的睾丸，前后排列。",
        "keyPoints": "1. 体态呈半透明葵花籽状。\n2. 后部具有前后排列的两个“高度细分支的树干状睾丸”，这是其最典型的解剖特征。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Paragonimus westermani egg",
        "searchTerm": "Paragonimus westermani egg",
        "imageUrls": [
          "/custom_images/img_60.jpg",
          "/custom_images/img_61.jpg",
          "/custom_images/img_62.jpg",
          "/custom_images/img_63.jpg",
          "/custom_images/img_64.jpg",
          "/custom_images/img_65.jpg"
        ],
        "morphology": "1. 卵较大（约80~118μm），呈椭圆形，金黄色。\n2. 左右常不对称（一侧较平，另一侧较隆起）。\n3. 前端较宽，具一明显的、常偏斜的大卵盖；后端卵壳常有明显的增厚。\n4. 卵内含有1个居中的卵细胞和十多个散在的卵黄细胞，未发育成毛蚴。",
        "keyPoints": "1. 姜片虫卵：体积更大（人体最大），对称椭圆形，卵盖小且不明显，无后端壳增厚；而肺吸虫卵金黄色，不对称，具大且偏斜的卵盖，后端壳增厚。\n2. 肺吸虫卵内部细胞未分裂，含大量卵黄细胞。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_16",
        "name": "16. 肺吸虫成虫",
        "englishName": "Paragonimus westermani adult",
        "searchTerm": "Paragonimus adult",
        "imageUrls": [
          "/custom_images/img_66.jpg",
          "/custom_images/img_67.jpg",
          "/custom_images/img_68.jpg",
          "/custom_images/img_69.jpg"
        ],
        "morphology": "1. 虫体肥厚，背面隆起，腹面扁平，形如半个咖啡豆，红褐色，长7~12mm。\n2. 口吸盘和腹吸盘大小相似，腹吸盘位于体中央。\n3. 内部生殖器官呈两侧并排排列：腹吸盘后方一侧为分叶状的卵巢，另一侧为盘曲的子宫。\n4. 虫体后部两侧并列着一对呈指状分支的睾丸。",
        "keyPoints": "1. 外观特征极强，肥厚如半颗咖啡豆。\n2. 内脏主要器官极其典型地呈“左右并列分布”（子宫与卵巢并列；两睾丸并列）。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_17",
        "name": "17. 肺吸虫囊蚴",
        "englishName": "Paragonimus westermani metacercaria",
        "searchTerm": "Paragonimus metacercaria",
        "imageUrls": [
          "/custom_images/img_70.jpg",
          "/custom_images/img_71.jpg"
        ],
        "morphology": "1. 呈近圆球形，大小约300~400μm。\n2. 囊壁由两层明晰的膜组成，内包裹着蜷曲的幼虫。\n3. 最具特征性的是，囊内幼虫体中央有一异常显眼的、含有黑色排泄物颗粒的排泄囊，呈黑十字形或星芒状。",
        "keyPoints": "1. 具有双层囊壁的圆球体。\n2. 幼虫体内有一个极其抢眼的暗黑色“十字形或星芒状”排泄囊。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Schistosoma japonicum egg",
        "searchTerm": "Schistosoma japonicum egg",
        "imageUrls": [
          "/custom_images/img_72.jpg",
          "/custom_images/img_73.jpg",
          "/custom_images/img_74.jpg",
          "/custom_images/img_75.jpg",
          "/custom_images/img_76.jpg"
        ],
        "morphology": "1. 呈椭圆形，淡黄色，大小约70~100μm。\n2. 卵壳薄，无卵盖；在卵壳一侧靠近中间处有一个小而短的棘状突起，称为“侧棘”。\n3. 卵内含有一个发育成熟的毛蚴，毛蚴头端常有分泌物附着。\n4. 卵壳表面常附着有宿主的组织碎屑。",
        "keyPoints": "1. 曼氏血吸虫卵：具有非常明显的大侧棘；埃及血吸虫卵：具有明显的尾端直棘。\n2. 日本血吸虫卵无卵盖，其“侧棘”较小且隐蔽，内含毛蚴。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_19",
        "name": "19. 日本血吸虫成虫",
        "englishName": "Schistosoma japonicum adult",
        "searchTerm": "Schistosoma japonicum adult male female",
        "imageUrls": [
          "/custom_images/img_77.jpg",
          "/custom_images/img_78.jpg",
          "/custom_images/img_79.jpg",
          "/custom_images/img_80.jpg",
          "/custom_images/img_81.jpg"
        ],
        "morphology": "1. 雌雄异体，但常处于雌雄合抱状态。\n2. 雄虫体粗短，乳白色，腹吸盘后的体两侧向腹面卷曲形成一条沟槽，称“抱雌沟”。\n3. 雌虫体细长，深褐色（因肠道吸收宿主血液色素所致），呈圆柱状，常居于雄虫的抱雌沟内。\n4. 体表光滑，无小结节（区别于曼氏血吸虫）。",
        "keyPoints": "1. 线虫类也为雌雄异体，但血吸虫具有极为独特的“雄虫粗短抱雌沟，雌虫细长深褐色居其内”的合抱伴生姿态。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_20",
        "name": "20. 日本血吸虫尾蚴",
        "englishName": "Schistosoma japonicum cercaria",
        "searchTerm": "Schistosoma cercaria",
        "imageUrls": [
          "/custom_images/img_82.jpg",
          "/custom_images/img_83.jpg",
          "/custom_images/img_84.jpg"
        ],
        "morphology": "1. 虫体分为体部和尾部。\n2. 体部前端有钻穿腺和头器，用于钻透宿主皮肤。\n3. 尾部细长，其远端明显分叉，且分叉的两支长度相等，称为“等长分叉”（叉尾型尾蚴）。",
        "keyPoints": "1. 尾端末端呈明显的“等长分叉”结构（叉尾型）。\n2. 这是其直接穿透人体皮肤感染的重要标志阶段。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Fasciolopsis buski adult",
        "searchTerm": "Fasciolopsis buski adult",
        "imageUrls": [
          "/custom_images/img_85.jpg",
          "/custom_images/img_86.jpg"
        ],
        "morphology": "1. 人体寄生吸虫中最大的一种，长可达20~75mm。\n2. 虫体扁平，肌肉丰厚，肉红色，外形酷似切片的生姜。\n3. 腹吸盘呈漏斗状，体积约为口吸盘的4~5倍，且两吸盘十分靠近虫体前端。\n4. 体后半部具有两个巨大、呈珊瑚状高度分支的睾丸，前后排列。",
        "keyPoints": "1. 人体最大吸虫，肥厚呈“厚生姜片”样。\n2. 腹吸盘极大并紧贴口吸盘，下半部有两个巨大的珊瑚树枝状分支的睾丸。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_22",
        "name": "22. 姜片虫虫卵",
        "englishName": "Fasciolopsis buski egg",
        "searchTerm": "Fasciolopsis buski egg",
        "imageUrls": [
          "/custom_images/img_87.jpg",
          "/custom_images/img_88.jpg",
          "/custom_images/img_89.jpg"
        ],
        "morphology": "1. 人体寄生虫卵中最大的一种，大小约130~140μm。\n2. 呈长椭圆形，淡黄色。\n3. 卵壳极薄，一端有较小且不明显的卵盖。\n4. 卵内充满大量颗粒状的卵黄细胞，中央有1个未分裂的卵细胞。",
        "keyPoints": "1. 肝片形吸虫卵：与姜片虫卵形态几乎完全相同，光镜下难以区分，通常需结合临床流行病学。\n2. 肺吸虫卵：不对称，卵盖大且明显；姜片虫卵对称，极大，薄壳，卵盖不明显，充满卵黄细胞。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Taenia egg",
        "searchTerm": "Taenia egg",
        "imageUrls": [
          "/custom_images/img_90.jpg",
          "/custom_images/img_91.jpg",
          "/custom_images/img_92.jpg",
          "/custom_images/img_93.jpg",
          "/custom_images/img_94.jpg",
          "/custom_images/img_95.jpg",
          "/custom_images/img_96.jpg"
        ],
        "morphology": "1. 呈球形或近球形，直径约31~43μm，棕黄色。\n2. 具有非常坚厚的胚膜，胚膜表面分布有清晰的放射状条纹（似车轮状）。\n3. 胚膜内包含有一具三对小钩的六钩蚴胚胎。\n4. （光镜下猪带绦虫卵与牛带绦虫卵形态完全相同，无法区分）。",
        "keyPoints": "1. 具有独特“车轮状放射细纹”的坚厚棕黄色胚膜。\n2. 内部可见发育成熟的含有六把小钩的六钩蚴。\n3. 注意：单凭虫卵形态无法区分猪带绦虫和牛带绦虫。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Taenia solium scolex",
        "searchTerm": "Taenia solium scolex",
        "imageUrls": [
          "/custom_images/img_97.jpg",
          "/custom_images/img_98.jpg",
          "/custom_images/img_99.jpg",
          "/custom_images/img_100.jpg"
        ],
        "morphology": "1. 头节呈球形，直径约1mm。\n2. 具有4个圆形的肌肉吸盘。\n3. 头节顶端有向外突出的“顶突”。\n4. 顶突上具有交错排列的内外两圈角质小钩（约25~50个），状如皇冠。",
        "keyPoints": "1. 牛带绦虫头节：略大，略呈方形，只有4个吸盘，无顶突，无小钩。\n2. 猪带绦虫头节具备“武装”：不仅有吸盘，更有“顶突和小钩”。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_25",
        "name": "25. 猪带绦虫成节",
        "englishName": "Taenia solium mature proglottid",
        "searchTerm": "Taenia solium proglottid",
        "imageUrls": [
          "/custom_images/img_101.jpg",
          "/custom_images/img_102.jpg"
        ],
        "morphology": "1. 节片近正方形，雌雄同体。\n2. 睾丸滤泡约150~200个，散布于节片背侧。\n3. 卵巢位于节片后部，分为左右两大叶，并在靠近生殖孔一侧生有一个较小的中央第三叶（即卵巢分三叶）。\n4. 生殖孔位于节片侧缘中部。",
        "keyPoints": "1. 牛带绦虫成节：卵巢仅分为左右两大叶（分两叶）。\n2. 猪带绦虫成节：卵巢分为三叶（左右大叶加中央小附叶），这是鉴别两者的金标准之一。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_26",
        "name": "26. 猪带绦虫孕节",
        "englishName": "Taenia solium gravid proglottid",
        "searchTerm": "Taenia solium gravid proglottid",
        "imageUrls": [
          "/custom_images/img_103.jpg",
          "/custom_images/img_104.jpg"
        ],
        "morphology": "1. 节片呈长方形，长宽比缩小。\n2. 子宫极其发达，内充满虫卵。\n3. 子宫主干居中，自中心向两旁发出侧分支。\n4. 单侧的一级分支数目较少，仅约 7~13 支，分支相对粗大，呈树枝状。",
        "keyPoints": "1. 牛带绦虫孕节：单侧一级子宫分支极多，达15~30支，分支细密如扫帚。\n2. 猪带绦虫孕节：单侧分支较少（7~13支），分支较粗直。可用压片法或注射墨汁观察分支数以鉴别。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_27",
        "name": "27. 猪带绦虫囊尾蚴",
        "englishName": "Taenia solium cysticercus",
        "searchTerm": "Taenia solium cysticercus",
        "imageUrls": [
          "/custom_images/img_105.jpg",
          "/custom_images/img_106.jpg",
          "/custom_images/img_107.jpg",
          "/custom_images/img_108.jpg",
          "/custom_images/img_109.jpg"
        ],
        "morphology": "1. 俗称囊虫，呈半透明的椭圆形囊泡，约黄豆或白豆大小。\n2. 囊内充满囊液，囊壁上有一个向内凹入的反卷的组织结节。\n3. 该结节内含有一个完全具备成虫头节特征的实心小头节，可见4个吸盘以及顶突和小钩。",
        "keyPoints": "1. 囊泡内包藏着向内翻卷的微小头节。\n2. 压片观察可见小头节上具有典型的“顶突和小钩”（牛带绦虫囊尾蚴无此结构，且极少感染人体）。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Taenia saginata scolex",
        "searchTerm": "Taenia saginata scolex",
        "imageUrls": [
          "/custom_images/img_110.jpg",
          "/custom_images/img_111.jpg",
          "/custom_images/img_112.jpg"
        ],
        "morphology": "1. 头节近似立方形或梨形，略大于猪带绦虫头节（1.5~2.0mm）。\n2. 具有4个较大的圆形肌肉吸盘。\n3. 头端光秃平坦，无顶突，也无角质小钩。",
        "keyPoints": "1. 猪带绦虫头节：有顶突及两圈小钩。\n2. 牛带绦虫头节：“无武装”，四吸盘方形头，无顶突无小钩（秃顶）。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_29",
        "name": "29. 牛带绦虫成节",
        "englishName": "Taenia saginata mature proglottid",
        "searchTerm": "Taenia saginata proglottid",
        "imageUrls": [
          "/custom_images/img_113.jpg",
          "/custom_images/img_114.jpg"
        ],
        "morphology": "1. 节片近正方形，雌雄同体。\n2. 睾丸滤泡数多达300~400个，较猪带密集。\n3. 卵巢位于节片后部，仅分为左右对称的两大叶，无中央第三附叶。\n4. 阴道内常可见发达的阴道括约肌（猪带无）。",
        "keyPoints": "1. 猪带绦虫成节：卵巢分三叶。\n2. 牛带绦虫成节：卵巢仅分左右两叶（无第三小叶），这是两者成节的鉴别要点。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_30",
        "name": "30. 牛带绦虫孕节",
        "englishName": "Taenia saginata gravid proglottid",
        "searchTerm": "Taenia saginata gravid proglottid",
        "imageUrls": [
          "/custom_images/img_115.jpg",
          "/custom_images/img_116.jpg",
          "/custom_images/img_117.jpg"
        ],
        "morphology": "1. 孕节常呈极度纵向伸长的狭长条状（长约16~30mm）。\n2. 子宫主干自中心向两旁分支异常茂密。\n3. 单侧发出的第一级分支数目多达 15~30 支，分支细长并具有反复分叉，外形呈树枝或扫帚状重叠。",
        "keyPoints": "1. 猪带绦虫孕节：单侧子宫分支7~13支。\n2. 牛带绦虫孕节：单侧子宫分支茂密，高达15~30支以上。由于孕节具有较强活动力，常可自发爬出肛门外。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_31",
        "name": "31. 牛带绦虫囊尾蚴",
        "englishName": "Taenia saginata cysticercus",
        "searchTerm": "Taenia saginata cysticercus",
        "imageUrls": [
          "/custom_images/img_179.png",
          "/custom_images/img_180.png"
        ],
        "morphology": "1. 呈黄豆粒大小的半透明椭圆形囊泡。\n2. 囊内充满了囊液，并同样向内反折包裹着一个未成熟的头节。\n3. 该内卷的头节仅有4个吸盘，完全缺失顶突和小钩结构。",
        "keyPoints": "1. 猪囊尾蚴：头节具顶突和小钩。\n2. 牛囊尾蚴：头节无顶突和小钩，且极少在人体内寄生发育。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Fertilized Ascaris egg",
        "searchTerm": "Ascaris lumbricoides fertilized egg",
        "imageUrls": [
          "/custom_images/img_118.jpg",
          "/custom_images/img_119.jpg",
          "/custom_images/img_120.jpg",
          "/custom_images/img_121.jpg",
          "/custom_images/img_122.jpg",
          "/custom_images/img_123.jpg"
        ],
        "morphology": "1. 呈宽椭圆形，大小约45~75μm × 35~50μm。\n2. 表面具有一层凹凸不平的蛋白质膜，通常被胆汁染成黄棕色。\n3. 卵壳厚且透明（由外向内分别为受精膜、壳质层、蛔甙层）。\n4. 卵内含有一个居中的、圆形的尚未分裂的卵细胞，卵细胞两端与卵壳之间常可见明显的新月形空隙。",
        "keyPoints": "1. 典型的宽椭圆形，外表包裹着棕黄色的“波浪状（波浪锯齿样）”粗糙蛋白质膜。\n2. 内部有明显的“两端新月形空隙”。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_33",
        "name": "33. 未受精蛔虫卵",
        "englishName": "Unfertilized Ascaris egg",
        "searchTerm": "Ascaris lumbricoides unfertilized egg",
        "imageUrls": [
          "/custom_images/img_124.jpg",
          "/custom_images/img_125.jpg",
          "/custom_images/img_126.jpg",
          "/custom_images/img_127.jpg"
        ],
        "morphology": "1. 较受精卵更为狭长，呈长椭圆形。\n2. 卵壳和蛋白质膜均较薄，甚至蛋白质膜缺失。\n3. 无蛔甙层，因此折光性差。\n4. 卵内不含圆形的受精卵细胞，而是充满了大小不等、排列不规则的折光性油滴状颗粒。",
        "keyPoints": "1. 受精蛔虫卵：宽椭圆，内含整齐的单核卵细胞及新月空隙。\n2. 未受精蛔虫卵：长椭圆，壳薄，内含散乱不规则的粗大折光颗粒，无新月空隙。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_34",
        "name": "34. 脱蛋白膜受精蛔虫卵",
        "englishName": "Decorticated fertilized Ascaris egg",
        "searchTerm": "Ascaris decorticated egg",
        "imageUrls": [
          "/custom_images/img_128.jpg"
        ],
        "morphology": "1. 其内部结构与正常的受精蛔虫卵完全一致（厚卵壳、单核细胞、两端新月空隙）。\n2. 唯一区别是其最外层黄棕色、凹凸不平的蛋白质膜被磨损或剥脱，暴露出透明、光滑的壳质层。\n3. 因此整体显得无色透明或极浅淡。",
        "keyPoints": "1. 极易与钩虫卵混淆：钩虫卵同样无色透明，但壳极薄，内含多细胞期的卵裂球。\n2. 脱蛋白膜蛔虫卵：虽然透明，但卵壳依然极厚，且内部为单细胞和典型的新月空隙。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_35",
        "name": "35. 蛔虫雄虫交合刺",
        "englishName": "Ascaris male copulatory spicule",
        "searchTerm": "Ascaris spicule",
        "imageUrls": [
          "/custom_images/img_129.jpg",
          "/custom_images/img_130.jpg"
        ],
        "morphology": "1. 蛔虫雄虫尾端较细且向腹面呈钩状弯曲。\n2. 尾端泄殖腔孔处常有一对（2根）等长的交合刺伸出。\n3. 交合刺呈细长的针状，微弯，用于交配时扩张雌虫阴道。",
        "keyPoints": "1. 雄虫尾端向腹面弯卷。\n2. 具有两根等长的微弯针状游离“交合刺”。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_36",
        "name": "36. 蛔虫唇瓣",
        "englishName": "Ascaris lip",
        "searchTerm": "Ascaris lips",
        "imageUrls": [
          "/custom_images/img_131.jpg",
          "/custom_images/img_132.jpg"
        ],
        "morphology": "1. 蛔虫头部无吸盘或角质小钩等附着器官。\n2. 头端具有三个呈“品”字形排列的肥厚肉质唇瓣（一个背唇瓣和两个亚腹唇瓣）。\n3. 唇瓣的内缘具有细齿，外缘有乳突。",
        "keyPoints": "1. 头部无齿、无囊，仅由三个肥大隆起的半球状“肉质唇瓣”呈品字形排列构成。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Hookworm egg",
        "searchTerm": "Hookworm egg",
        "imageUrls": [
          "/custom_images/img_133.jpg",
          "/custom_images/img_134.jpg",
          "/custom_images/img_135.jpg",
          "/custom_images/img_136.jpg",
          "/custom_images/img_137.jpg",
          "/custom_images/img_138.jpg",
          "/custom_images/img_139.jpg",
          "/custom_images/img_140.jpg"
        ],
        "morphology": "1. 呈规则的椭圆形，大小约60×40μm。\n2. 卵壳极薄，仅为单层透明膜，无色透明。\n3. 新鲜排出时，卵内通常可见分裂成2~8个细胞（卵裂球）的桑葚状结构。\n4. 卵壳与内部细胞团之间有宽阔、明显的透明空隙。",
        "keyPoints": "1. 脱蛋白膜蛔虫卵：虽透明但卵壳很厚，内含单个完整卵细胞。\n2. 钩虫卵：完美椭圆、卵壳极薄近水样透明，内部为分裂期的数个卵裂球，卵壳与细胞团间空隙极大。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Ancylostoma duodenale buccal capsule",
        "searchTerm": "Ancylostoma duodenale buccal",
        "imageUrls": [
          "/custom_images/img_141.jpg",
          "/custom_images/img_142.jpg",
          "/custom_images/img_143.jpg",
          "/custom_images/img_144.jpg"
        ],
        "morphology": "1. 虫体前端向背面弯曲，口囊为一个深陷且角质化的大空杯底状结构。\n2. 其主要特征在于口囊前侧腹缘，具有两对（共4枚）向内弯曲的、尖锐的角质化钩齿。\n3. 钩齿排列分布犹如利刃，深刺入肠黏膜。",
        "keyPoints": "1. 美洲钩虫口囊：具有一对半月形的板齿。\n2. 十二指肠钩虫口囊：腹缘具有两对（4枚）尖锐弯曲的长“钩齿”，这是鉴别两种钩虫最重要的标志。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_40",
        "name": "40. 十二指肠钩虫雄虫交合伞",
        "englishName": "Ancylostoma duodenale male copulatory bursa",
        "searchTerm": "Ancylostoma duodenale bursa",
        "imageUrls": [
          "/custom_images/img_145.jpg",
          "/custom_images/img_178.jpg"
        ],
        "morphology": "1. 雄虫尾端向腹面膨大呈伞状，称为膜质交合伞，内有肌质辐肋支撑。\n2. 其背辐肋（dorsal ray）自基部发出后，直到远端才分叉为两支。\n3. 分叉后的每一支末端又再分为三个小分支。",
        "keyPoints": "1. 美洲钩虫交合伞：背辐肋早分叉，每支末端两小梢。\n2. 十二指肠钩虫交合伞：背辐肋远端分叉，每支末端三个小分支（口诀：远分叉，三小梢）。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Necator americanus buccal capsule",
        "searchTerm": "Necator americanus buccal",
        "imageUrls": [
          "/custom_images/img_146.jpg",
          "/custom_images/img_147.jpg"
        ],
        "morphology": "1. 虫体前端亦有角质化的深口囊结构。\n2. 与十二指肠钩虫不同，其口囊腹侧前缘没有尖锐的钩齿。\n3. 取而代之的是一对呈半月形的宽大切割板，称为板齿。",
        "keyPoints": "1. 十二指肠钩虫口囊：有两对尖锐弯曲的钩齿。\n2. 美洲钩虫口囊：前缘没有钩齿，而是长有一对平阔的、呈半月形的“板齿”。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_41",
        "name": "41. 美洲钩虫雄虫交合伞",
        "englishName": "Necator americanus male copulatory bursa",
        "searchTerm": "Necator americanus bursa",
        "imageUrls": [
          "/custom_images/img_181.jpg",
          "/custom_images/img_182.jpg"
        ],
        "morphology": "1. 雄虫尾端交合伞稍显狭长。\n2. 背辐肋在基部极早期即分叉为两支主干向远端延伸。\n3. 分叉后的每支末端各自再分为两个小分支。",
        "keyPoints": "1. 十二指肠钩虫交合伞：背辐肋远分叉，末端三小梢。\n2. 美洲钩虫交合伞：背辐肋在基部极早期分叉，每支末端各有两个小分支（口诀：早分叉，两小梢）。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Enterobius vermicularis egg",
        "searchTerm": "Enterobius vermicularis egg",
        "imageUrls": [
          "/custom_images/img_148.jpg",
          "/custom_images/img_149.jpg",
          "/custom_images/img_150.jpg",
          "/custom_images/img_151.jpg",
          "/custom_images/img_152.jpg",
          "/custom_images/img_153.jpg",
          "/custom_images/img_154.jpg"
        ],
        "morphology": "1. 无色透明，大小约为50~60μm × 20~30μm。\n2. 呈不对称的椭圆形，一侧较扁平，另一侧明显隆起，整体外形酷似柿子核或D字形。\n3. 卵壳较厚，分三层。\n4. 刚排出时内含蝌蚪期幼虫，很快发育成具有感染性的盘曲幼虫。",
        "keyPoints": "1. 最典型的特征是其“不对称”的形态，一侧扁平一侧隆起，如柿子核。\n2. 卵壳厚且透明，内常含有成形的幼虫。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_43",
        "name": "43. 蛲虫头顶部（咽管球）",
        "englishName": "Enterobius vermicularis cephalic alae (pharyngeal bulb)",
        "searchTerm": "Enterobius vermicularis adult",
        "imageUrls": [
          "/custom_images/img_155.jpg",
          "/custom_images/img_156.jpg"
        ],
        "morphology": "1. 蛲虫成虫体表有横纹，头部角皮向两侧膨大扩展，形成领状的双侧“头翼”。\n2. 消化道食管长，其末端明显膨大呈一个正圆球形的肌质结构，称为“咽管球”（pharyngeal bulb）。\n3. 咽管球与头翼是鉴定蛲虫成虫的重要依据。",
        "keyPoints": "1. 头部具有双侧外展的透明“头翼”。\n2. 食管末端具有极为明显、球状肥大的“咽管球”。",
        "keyPointTitle": "明显特征"
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
        "englishName": "Trichuris trichiura egg",
        "searchTerm": "Trichuris trichiura egg",
        "imageUrls": [
          "/custom_images/img_157.jpg",
          "/custom_images/img_158.jpg",
          "/custom_images/img_159.jpg",
          "/custom_images/img_160.jpg",
          "/custom_images/img_161.jpg",
          "/custom_images/img_162.jpg",
          "/custom_images/img_163.jpg"
        ],
        "morphology": "1. 呈黄褐色，大小约50~54μm × 22~23μm。\n2. 外形似腰鼓、橄榄或纺锤形，卵壳较厚。\n3. 最显著的特征是卵壳的两极端各有一个透明的、状如塞子的突起，称为“透明栓”（盖塞）。\n4. 新鲜排出时内含一个未分裂的受精卵细胞。",
        "keyPoints": "1. 外形酷似腰鼓或纺锤，两极带有对称的突起“透明栓”。\n2. 颜色较深呈黄褐色，极易辨认。",
        "keyPointTitle": "明显特征"
      },
      {
        "id": "stage_45",
        "name": "45. 雌鞭虫成虫",
        "englishName": "Female Trichuris trichiura adult",
        "searchTerm": "Trichuris trichiura female",
        "imageUrls": [
          "/custom_images/img_164.jpg",
          "/custom_images/img_165.jpg",
          "/custom_images/img_166.jpg",
          "/custom_images/img_167.jpg"
        ],
        "morphology": "1. 外形如马鞭，体长约35~50mm。\n2. 前段约占体长3/5，呈细线状，内含串珠状的食管腺细胞；后段约占体长2/5，明显变粗，包含生殖器官和肠道。\n3. 雌虫尾部钝圆，平直而不弯曲。\n4. 体内为单管型生殖系统，子宫内常充满鞭虫卵。",
        "keyPoints": "1. 鞭虫雄虫：尾部向腹面极度弯曲卷拢，有一根交合刺伸出。\n2. 鞭虫雌虫：前细后粗如马鞭，但尾端是“平直、钝圆”的，不发生卷曲。",
        "keyPointTitle": "易混辨析"
      },
      {
        "id": "stage_46",
        "name": "46. 雄鞭虫成虫",
        "englishName": "Male Trichuris trichiura adult",
        "searchTerm": "Trichuris trichiura male",
        "imageUrls": [
          "/custom_images/img_169.jpg",
          "/custom_images/img_170.jpg",
          "/custom_images/img_171.jpg"
        ],
        "morphology": "1. 外形与雌虫相似，亦呈马鞭状（前细后粗），体长约30~45mm。\n2. 与雌虫不同的是，其尾端向腹面呈极度弯卷（螺旋形卷曲）。\n3. 尾端常可见一根被透明鞘膜包被的交合刺伸出体外，鞘上有小刺。",
        "keyPoints": "1. 鞭虫雌虫：尾端平直。\n2. 鞭虫雄虫：前细后粗，尾端“卷曲如环”，常附一长细刺（交合刺）。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Wuchereria bancrofti microfilaria",
        "searchTerm": "Wuchereria bancrofti microfilaria",
        "imageUrls": [
          "/custom_images/img_172.jpg",
          "/custom_images/img_173.jpg",
          "/custom_images/img_174.jpg"
        ],
        "morphology": "1. 寄生于血液中。经瑞氏或吉氏染色后可见透明虫鞘包裹全身。\n2. 虫体外形体态自然，曲线柔和。\n3. 体内的染色质核（体核）大小均匀，呈颗粒状，分布较疏松，颗粒边界清晰可见。\n4. 尾部细长逐渐变尖，最关键的特征是体核不达尾端（末端无核区长）。",
        "keyPoints": "1. 马来微丝蚴：体态僵硬折转多，体核重叠密集，尾部有两个明显的尾核。\n2. 班氏微丝蚴：体态柔和，体核疏松，尾端尖细且“无核”（体核不能到达最末端）。",
        "keyPointTitle": "易混辨析"
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
        "englishName": "Brugia malayi microfilaria",
        "searchTerm": "Brugia malayi microfilaria",
        "imageUrls": [
          "/custom_images/img_175.jpg",
          "/custom_images/img_176.jpg",
          "/custom_images/img_177.jpg"
        ],
        "morphology": "1. 寄生于血液中，有虫鞘包裹。\n2. 虫体较短小，体态僵硬，常有不规则的急剧折转。\n3. 体核较大，染色较深，排列拥挤密集，相互重叠，难以分清界限。\n4. 尾部钝圆，最具特征性的是其尾端具有两个明显分离的圆形核，称为“尾核”。",
        "keyPoints": "1. 班氏微丝蚴：尾部无核区长，无尾核。\n2. 马来微丝蚴：体态僵硬，体核拥挤密集，尾部最末端具有“两个孤立分离的尾核”（一在前一在后），是核心鉴别点。",
        "keyPointTitle": "易混辨析"
      }
    ]
  }
];
