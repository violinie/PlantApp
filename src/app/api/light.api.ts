import { Light } from '../interfaces/plant.interface';

export const light = [
  {
    id: 1,
    enum: Light.little,
    name: 'Polostín' //(500–2 500 lux)
  },
  {
    id: 2,
    enum: Light.normal,
    name: 'Jasné nepřímé světlo' // (2 500–20 000 lux)
  },
  {
    id: 3,
    enum: Light.lot,
    name: 'Přímé světlo' // (20 000–50 000 lux)
  }
];
