import {
  Dew,
  Difficulty,
  Light,
  Plant,
  Propagation,
  Water
} from '../interfaces/plant.interface';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    image: 'https://source.unsplash.com/random/600x600?monstera',
    desctiption:
      'Rod rostlin z čeledi árónovité. Jsou to vesměs mohutné liány, vyskytující se výhradně v tropické Americe. Většina druhů má rozměrné, charakteristicky děrované listy. Květy jsou uspořádané do palice s toulcem a jsou opylovány hmyzem. Plodem jsou bobule spojené do palicovitého plodenství. Rod obsahuje asi 40 druhů a je rozšířen ve vlhkých tropech od Mexika po Brazílii. Nejvíce druhů roste v horských pralesích Střední Ameriky. Monstery rostou zpravidla jako poloepifyty na kmenech stromů. Mladé semenáčky mají zajímavá přizpůsobení, umožňující jim nalézt vhodnou oporu pro další růst.',
    difficulty: Difficulty.easy,
    light: Light.little,
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: Water.extreme,
    dew: Dew.yes,
    propagation: Propagation.topCut,
    purpose: 'climbing',
    species: 'Monstera'
  },
  {
    id: 2,
    name: 'Alocasia wentii',
    slug: 'alocasia-wentii',
    image: 'https://source.unsplash.com/random/600x600?alocasia',
    desctiption:
      'Rod rostlin z čeledi árónovité (Araceae). Jsou to středně velké až mohutné byliny s tlustým podzemním oddenkem. Květy jsou jednopohlavné, uspořádané v palici s toulcem. Rod zahrnuje asi 60 až 70 druhů a je přirozeně rozšířen v tropech a subtropech Asie, Austrálie a Tichomoří. Tuto alokázii najdete také pod názvem sloní ucho a její listy jsou lesklé, na povrchu tmavě zelené a zespodu fialovo hnědé.',
    difficulty: Difficulty.hard,
    light: Light.little,
    purifyAir: true,
    petFriendly: true,
    hydroponics: true,
    water: Water.little,
    dew: Dew.no,
    propagation: Propagation.dividing,
    species: 'Alocasia'
  },
  {
    id: 3,
    name: 'Philodendron scandens',
    slug: 'philodendron-scandens',
    image: 'https://source.unsplash.com/random/600x600?philodendron',
    desctiption:
      'Rod rostlin z čeledi árónovité. Jsou to malé až robustní, vytrvalé byliny s celistvými nebo členěnými, řapíkatými listy a drobnými květy v palicovitých květenstvích obalených toulcem. Plodem je bobule. V přírodě rostou jako epifyty a poloepifyty v korunách stromů, ale i na skalách, pevné zemi a v bažinách. Mají zajímavý způsob opylování, spojený s tvorbou tepla. Rod zahrnuje asi 500 druhů a je rozšířen výhradně v tropické Americe.',
    difficulty: Difficulty.easy,
    light: Light.normal,
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: Water.lot,
    dew: Dew.yes,
    propagation: Propagation.stemcut,
    species: 'Philodentron'
  },
  {
    id: 4,
    name: 'Epipremnum Golden',
    slug: 'epipremnum-golden',
    image: 'https://source.unsplash.com/random/600x600?epipremnum',
    desctiption:
      'Rod rostlin z čeledi áronovitých (Araceae). Zahrnuje asi 20 druhů mohutných lián, rozšířených v tropické Asii a Austrálii. Mladé formy šplhavnice zlaté s panašovanými listy se pěstují jako pokojové rostliny, často pod nesprávným názvem potos nebo scindapsus.',
    difficulty: Difficulty.easy,
    light: Light.little,
    purifyAir: true,
    petFriendly: false,
    hydroponics: true,
    water: Water.medium,
    dew: Dew.yes,
    propagation: Propagation.dividing,
    purpose: 'climbing',
    species: 'Epipremnum-scindapsus'
  },
  {
    id: 5,
    name: 'Scindapsus pictus Exotica',
    slug: 'scindapsus-pictus-exotica',
    desctiption:
      'Pochází z Indonésie, Malajsie a Šalamounovy ostrovy. Tato popínavá, velmi rychle rostoucí rostlina s listy se srdcovitým tvarem, které jsou posety bílými skrvrnkami, patří k liánám a pěstuje se tak při opoře nebo v závěsu.',
    image: 'https://source.unsplash.com/random/600x600?scindapsus',
    hydroponics: true,
    difficulty: Difficulty.easy,
    light: Light.little,
    water: Water.little,
    dew: Dew.no,
    propagation: Propagation.stemcut,
    purpose: 'climbing',
    species: 'Epipremnum-scindapsus'
  },
  {
    id: 6,
    name: 'Syngonium Pixie',
    slug: 'syngonium-pixie',
    image: 'https://source.unsplash.com/random/600x600?syngonium',
    desctiption:
      'Tato popínavá rostlina má listy leskle zelené nebo se zelenobílým mramorováním. Vytváří vzdušné kořeny. Roste velice rychle. V mládí je rostlina kompaktní a nepotřebuje k růstu oporu. Během růstu rostlina mění listy z jednoduchých na laločnaté, vytváří popínavé stonky, které se samy neudrží vzpřímené a potřebují oporu.',
    difficulty: Difficulty.easy,
    light: Light.normal,
    purifyAir: true,
    petFriendly: false,
    water: Water.medium,
    dew: Dew.yes,
    hydroponics: true,
    propagation: Propagation.topCut,
    commonProblems: [
      {
        symptom: 'Hnědnutí konců listů: ',
        causes: ['malá vzdušná vlhkost', 'málo vody']
      }
    ],
    // 'Hnědnutí konců listů: malá vzdušná vlhkost / málo vody; třásněnky',
    species: 'Syngonium'
  },
  {
    id: 7,
    name: 'Alocasia Black Velvet',
    desctiption:
      'Alokázie patří mezi áronovité rostliny vyrůstající z hlízovitých oddenků. Vyznačují se velkými šípovitými až srdčitými listy, které rostou na dlouhých řapících. Listy alokázií jsou velmi zdobné, většinou s výrazným žebrováním a hladkými nebo zvlněnými okraji. Jsou to rostliny velmi náročné s vyššími požadavky na péči. Tento druh Alokázií je menšího vzrůstu s téměř černými listy ve tvaru srdce a jejich povrch vypadá jako samet protkaný bílým žilkováním. ',
    image: 'https://source.unsplash.com/random/600x600?plant',
    hydroponics: true,
    difficulty: Difficulty.easy,
    light: Light.little,
    water: Water.little,
    dew: Dew.yes,
    propagation: Propagation.topCut,
    slug: 'zamioculcas-zamiifolia',
    species: 'Alocasia'
  }
];
