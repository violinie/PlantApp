import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plants as allPlants } from '../api/plants.api';
import { Plant } from '../interfaces/plant.interface';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  // create variable plant for this component
  public plants: Plant[] = allPlants;
  public plant: Plant | undefined;
  public readonly Array = Array;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let plants: Plant[] = allPlants;

      if (params.get('species')) {
        let temp: string | null = params.get('species');
        const speciesIds = temp?.split(',').map(Number);
        plants = this.filterSpecies(speciesIds ? speciesIds : [], plants);
      }
      if (params.get('petFriendly')) {
        plants = this.filterBoolean(plants, 'petFriendly');
      }
      if (params.get('hydroponics')) {
        plants = this.filterBoolean(plants, 'hydroponics');
      }
      if (params.get('purifyAir')) {
        plants = this.filterBoolean(plants, 'purifyAir');
      }
      this.plants = plants;
    });
  }

  private filterSpecies(species: number[], plants: Plant[]): Plant[] {
    console.log('species', species, plants);
    return plants.filter(plant => species.includes(plant.species));
  }

  private filterBoolean(plants: Plant[], attribute: keyof Plant): Plant[] {
    return plants.filter(plant => plant[attribute] === true);
  }
}
