import { Plant } from '../interfaces/plant.interface';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    image: 'https://source.unsplash.com/random/500x500?monstera',
    desctiption:
      'Rod rostlin z čeledi árónovité. Jsou to vesměs mohutné liány, vyskytující se výhradně v tropické Americe. Většina druhů má rozměrné, charakteristicky děrované listy. Květy jsou uspořádané do palice s toulcem a jsou opylovány hmyzem. Plodem jsou bobule spojené do palicovitého plodenství. Rod obsahuje asi 40 druhů a je rozšířen ve vlhkých tropech od Mexika po Brazílii. Nejvíce druhů roste v horských pralesích Střední Ameriky. Monstery rostou zpravidla jako poloepifyty na kmenech stromů. Mladé semenáčky mají zajímavá přizpůsobení, umožňující jim nalézt vhodnou oporu pro další růst.',

    difficulty: 2,
    light: 'Rozptýlené světlo, maximálně mírný polostín',
    purifyAir: true,
    petFriendly: false,

    hydroponics: true,
    water: 'Po úplném proschnutí',
    dew: 'Větší',
    propagation: 'Řízky'
  },
  {
    id: 2,
    name: 'Alocasia wentii',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?alocasia',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'alocasia-wentii'
  },
  {
    id: 3,
    name: 'Philodendron scandens',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?philodendron',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'philodendron-scandens'
  },
  {
    id: 4,
    name: 'Epipremnum Golden',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?epipremnum',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'epipremnum-golden'
  },
  {
    id: 5,
    name: 'Scindapsus pictus Exotica',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?scindapsus',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'scindapsus-pictus-exotica'
  },
  {
    id: 6,
    name: 'Syngonium Pixie',
    slug: 'syngonium-pixie',
    image: 'https://source.unsplash.com/random/500x500?syngonium',
    desctiption: 'Lorem ipsum',

    difficulty: 1,
    light: 'light',
    purifyAir: true,
    petFriendly: false,

    water: 'water',
    dew: 'Vyžaduje rosení listů',
    hydroponics: true,
    propagation: 'Řízky',
    commonProblems:
      'Hnědnutí konců listů: malá vzdušná vlhkost / málo vody; třásněnky'
  },
  {
    id: 7,
    name: 'Zamioculcas zamiifolia',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?zamioculcas',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'zamioculcas-zamiifolia'
  },
  {
    id: 8,
    name: 'Calathea orbifolia',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?calathea',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'calathea-orbifolia'
  },
  {
    id: 9,
    name: 'Marantha leuconeura Fascinator',
    desctiption: 'Lorem ipsum',
    image: 'https://source.unsplash.com/random/500x500?marantha',
    hydroponics: true,
    difficulty: 1,
    light: 'light',
    water: 'water',
    dew: 'xx',
    propagation: 'propagation',
    slug: 'marantha-leuconeura-fascinator'
  }
];
