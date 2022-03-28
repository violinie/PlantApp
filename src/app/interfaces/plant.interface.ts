export interface Plant {
  id: number;
  name: string;
  slug: string;
  image: string;
  desctiption: string;
  difficulty: Difficulty;
  light: Light;
  purifyAir?: boolean;
  petFriendly?: boolean;
  hydroponics: boolean;
  water: string;
  dew: Dew;
  propagation: Propagation;
  commonProblems?: string;

  species?: Species;
}

// export type Difficulty = 'easy' | 'medium' | 'hard';
export type Light = 'light' | 'dark';
export type Dew = 'yes' | 'may' | 'no';
export type Propagation = 'stem-cut' | 'bulb' | 'dividing';

export type Species =
  | 'alocasia'
  | 'epipremnum-scindapsus'
  | 'peperomia'
  | 'ficus'
  | '';

export enum Difficulty {
  easy = 'Pro začátečníky',
  medium = 'Normální',
  hard = 'Pro pokročilé'
}
