import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantComponent } from './plant.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { FilteredComponent } from './components/filtered/filtered.component';


@NgModule({
  declarations: [
    PlantComponent,
    DetailComponent,
    FilteredComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    SharedModule
  ]
})
export class PlantModule { }
