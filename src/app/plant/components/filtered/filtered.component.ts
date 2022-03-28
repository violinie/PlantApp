import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredComponent implements OnInit {
  public plant: Plant | undefined;

  constructor() {}

  ngOnInit(): void {}
}
