import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { plants } from 'src/app/api/plants.api';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() plant: Plant | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
