import { Difficulty, Plant } from '../interfaces/plant.interface';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    image: 'https://source.unsplash.com/random/500x500?monstera',
    desctiption:
      'Rod rostlin z čeledi árónovité. Jsou to vesměs mohutné liány, vyskytující se výhradně v tropické Americe. Většina druhů má rozměrné, charakteristicky děrované listy. Květy jsou uspořádané do palice s toulcem a jsou opylovány hmyzem. Plodem jsou bobule spojené do palicovitého plodenství. Rod obsahuje asi 40 druhů a je rozšířen ve vlhkých tropech od Mexika po Brazílii. Nejvíce druhů roste v horských pralesích Střední Ameriky. Monstery rostou zpravidla jako poloepifyty na kmenech stromů. Mladé semenáčky mají zajímavá přizpůsobení, umožňující jim nalézt vhodnou oporu pro další růst.',
    difficulty: Difficulty.medium,
    light: 'light',
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: 'Po úplném proschnutí',
    dew: 'may',
    propagation: 'stem-cut'
  },
  {
    id: 2,
    name: 'Alocasia wentii',
    slug: 'alocasia-wentii',
    image: 'https://source.unsplash.com/random/500x500?alocasia',
    desctiption: 'Lorem',
    difficulty: Difficulty.hard,
    light: 'light',
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: 'Po úplném vyschnutí substrátu',
    dew: 'yes',
    propagation: 'dividing'
  },
  {
    id: 3,
    name: 'Philodendron scandens',
    slug: 'philodendron-scandens',
    image: 'https://source.unsplash.com/random/500x500?philodendron',
    desctiption: 'Lorem',
    difficulty: Difficulty.easy,
    light: 'light',
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: 'Po vyschnutí substrátu, ideálně zespodu',
    dew: 'may',
    propagation: 'stem-cut'
  },
  {
    id: 4,
    name: 'Epipremnum Golden',
    slug: 'epipremnum-golden',
    image: 'https://source.unsplash.com/random/500x500?epipremnum',
    desctiption: 'Lorem ipsum',
    difficulty: Difficulty.easy,
    light: 'light',
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: 'water',
    dew: 'may',
    propagation: 'stem-cut'
  },
  {
    id: 5,
    name: 'Scindapsus pictus Exotica',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?scindapsus',
    hydroponics: true,
    difficulty: Difficulty.easy,
    light: 'light',
    water: 'water',
    dew: 'yes',
    propagation: 'stem-cut',
    slug: 'scindapsus-pictus-exotica'
  },
  {
    id: 6,
    name: 'Syngonium Pixie',
    slug: 'syngonium-pixie',
    image: 'https://source.unsplash.com/random/500x500?syngonium',
    desctiption: 'Lorem ipsum',
    difficulty: Difficulty.easy,
    light: 'light',
    purifyAir: true,
    petFriendly: false,
    water: 'water',
    dew: 'yes',
    hydroponics: true,
    propagation: 'stem-cut',
    commonProblems:
      'Hnědnutí konců listů: malá vzdušná vlhkost / málo vody; třásněnky'
  },
  {
    id: 7,
    name: 'Zamioculcas zamiifolia',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?zamioculcas',
    hydroponics: true,
    difficulty: Difficulty.easy,
    light: 'light',
    water: 'water',
    dew: 'may',
    propagation: 'bulb',
    slug: 'zamioculcas-zamiifolia'
  }
];
