export interface Plant {
  id: number;
  name: string;
  slug: string;
  image: string;
  desctiption: string;
  difficulty: Difficulty;
  light?: Light;
  purifyAir?: boolean;
  petFriendly?: boolean;
  hydroponics: boolean;
  water: Water;
  dew: Dew;
  propagation: Propagation;
  commonProblems?: CommonProblem[];
  purpose?: Purpose;
  species: number;
}

export interface CommonProblem {
  symptom: string;
  causes: string[];
}

export type Purpose =
  // | 'purifyAir'
  // | 'petFriendly'
  'climbing' | 'prayer' | 'blooming';

export enum Difficulty {
  easy = 'Pro začátečníky',
  medium = 'Normální',
  hard = 'Pro pokročilé'
}

export enum Light {
  normal = 'Jasné nepřímé/rozptýlené',
  little = 'Nepřímé, zvládne i polostín'
}

export enum Dew {
  yes = 'Vyžaduje rosení',
  no = 'Snáší suchý vzduch a nevyžaduje rosení'
}

export enum Propagation {
  topCut = 'Řízky stonků nebo vrcholové řízky',
  stemcut = 'Řízky stonků',
  // bulb = '',
  dividing = 'Dělením trsů'
}

export enum Water {
  extreme = 'Je vhodné, aby byl substrát stále mírně vlhký, ale nesmí stát dlouhodobě ve vodě, mohly by uhnívat kořeny.',
  lot = 'Zaléváme zhruba jednou až dvakrát za týden, preferuje vlhčí půdu. Mezi zaléváním necháme svrchní část substrátu vyschnout. Při přelití by mohlo dojít k uhnívání kořenů.',
  medium = 'Zaléváme za 1 – 2 týdny, preferuje vlhčí půdu. Mezi zaléváním však necháme svrchní část substrátu vyschnout. Při přelití by mohlo dojít k uhnívání kořenů.',
  little = 'Zaléváme mírně po proschnutí substrátu. Rostlině vyhovuje suchá půda, takže nevadí, když občas vynecháte.'
}
