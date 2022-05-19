import { Light } from '../interfaces/plant.interface';

export const light = [
  {
    id: 1,
    enum: Light.little //(500–2 500 lux)
  },
  {
    id: 2,
    enum: Light.normal // (2 500–20 000 lux)
  },
  {
    id: 3,
    enum: Light.lot // (20 000–50 000 lux)
  }
];
