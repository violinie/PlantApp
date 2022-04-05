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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log('p', params);
      let temp: string = '2';
      const species = temp.split(',');
      const a = this.filterSpecies(Number(species[0]));
      console.log(a);
      if (params.get('petFriendly')) {
        this.plants = this.filterBoolean();
      } else {
        this.plants = plants;
      }
    });

    // HELP: display plants on species select
  }

  private filterSpecies(species: number): Plant[] {
    return plants.filter(plant => plant.species === species);
  }

  private filterBoolean(): Plant[] {
    return plants.filter(plant => plant.petFriendly === true);
  }
}
