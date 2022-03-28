import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [HomepageComponent, FilterComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedModule]
})
export class HomepageModule {}
