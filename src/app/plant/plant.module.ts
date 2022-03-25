import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantComponent } from './plant.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlantComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    SharedModule
  ]
})
export class PlantModule { }
