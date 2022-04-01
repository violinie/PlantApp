import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilteredComponent } from './components/filtered/filtered.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PlantRoutingModule } from './plant-routing.module';
import { PlantComponent } from './plant.component';

@NgModule({
  declarations: [
    PlantComponent,
    DetailComponent,
    FilteredComponent,
    FilterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlantModule {}
