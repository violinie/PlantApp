export interface Plant {
  id: number;
  name: string;
  image: string;
  desctiption: string;
  hydroponics: boolean;
  difficulty: number;
  light: string;
  water: string;
  dew: boolean;
  propagation: string;
  common_problems?: string;
  slug: string;
}
