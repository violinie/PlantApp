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
      if (params.get('petFriendly')) {
        this.plants = this.filterPlants();
      } else {
        this.plants = plants;
      }
    });
  }

  private filterPlants(): Plant[] {
    return plants.filter(plant => plant.petFriendly === true);
  }
}
