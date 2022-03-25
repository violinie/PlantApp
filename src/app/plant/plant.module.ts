import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantComponent } from './plant.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    PlantComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule
  ]
})
export class PlantModule { }
