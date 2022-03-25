import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plants } from 'src/app/api/plants.api';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  // create "let" plant for this component
  public plant: Plant | undefined

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('id');
    this.plant = plants.find(plant => productIdFromRoute === plant.slug)
  }

}
