export interface Plant {
  id: number;
  name: string;
  image: string;
  desctiption: string;
  hydroponics: boolean;
  water: string;
  dew: boolean;
  propagation: string;
  commonProblems?: string;
  light: string;
  petFriendly?: boolean;
  difficulty: number;
  slug: string;
}
