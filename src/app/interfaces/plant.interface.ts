export interface Plant {
  id: number;
  name: string;
  slug: string;
  image: string;
  desctiption: string;

  difficulty: number;
  light: string;
  purifyAir?: boolean;
  petFriendly?: boolean;

  hydroponics: boolean;
  water: string;
  dew: string;
  propagation: string;
  commonProblems?: string;
}
