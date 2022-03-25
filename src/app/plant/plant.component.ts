import { Component } from '@angular/core';
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
}
