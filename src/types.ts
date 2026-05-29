export interface ParasiteStage {
  id: string;
  name: string;
  englishName: string;
  searchTerm: string;
  imageUrls: string[];
  morphology: string;
  keyPoints: string;
  keyPointTitle?: string;
}

export interface Parasite {
  id: string;
  category: string;
  chineseName: string;
  scientificName: string;
  description: string;
  stages: ParasiteStage[];
}

export type Category = '医学原虫' | '医学吸虫' | '医学绦虫' | '医学线虫' | '医学节肢动物';
