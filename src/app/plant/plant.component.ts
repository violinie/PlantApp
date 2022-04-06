import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plants } from '../api/plants.api';
import { Plant } from '../interfaces/plant.interface';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  // create variable plant for this component
  public plants: Plant[] = plants;
  public plant: Plant | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log('p', params);
      if (params.get('species') || params.get('petFriendly')) {
        let temp: string | null = params.get('species');
        const species = temp?.split(',').map(Number);
        console.log('spec', species, 'id', this.plant?.id);
        this.plants = this.filterSpecies(species ? species : []);
      } else {
        this.plants = plants;
      }
      // if (params.get('petFriendly')) {
      //   this.plants = this.filterBoolean();
      // } else {
      //   this.plants = plants;
      // }
    });
  }

  private filterSpecies(species: number[]): Plant[] {
    return plants.filter(plant => species.includes(plant.species));
  }

  private filterBoolean(): Plant[] {
    return plants.filter(plant => plant.petFriendly === true);
  }
}
