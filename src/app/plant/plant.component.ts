import { Component, OnInit } from '@angular/core';
import { Plant } from '../interfaces/plant.interface';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  public plant: Plant | undefined

  constructor() { }

  ngOnInit(): void {

  }

}
