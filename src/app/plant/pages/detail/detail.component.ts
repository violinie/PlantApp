import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCloudRain,
  faExclamationTriangle,
  faMehBlank,
  faSeedling,
  faTint
} from '@fortawesome/free-solid-svg-icons';
import { plants } from 'src/app/api/plants.api';
import { Difficulty, Plant } from 'src/app/interfaces/plant.interface';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public Difficulty = Difficulty;

  faTint = faTint;
  faCloudRain = faCloudRain;
  faMehBlank = faMehBlank;
  faSeedling = faSeedling;
  faExclamationTriangle = faExclamationTriangle;
  // create "let" plant for this component
  public plant: Plant | undefined;
  public plants: Plant[] = plants;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('id');
    this.plant = plants.find(plant => productIdFromRoute === plant.slug);
  }
}
