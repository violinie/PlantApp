import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [CardComponent, FontAwesomeModule]
})
export class SharedModule {}
