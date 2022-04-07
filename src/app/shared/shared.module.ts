import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  declarations: [CardComponent, PlaceholderComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [CardComponent, FontAwesomeModule, PlaceholderComponent]
})
export class SharedModule {}
