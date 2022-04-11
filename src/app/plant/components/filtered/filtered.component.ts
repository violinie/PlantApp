import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { faLungs, faPaw, faSun } from '@fortawesome/free-solid-svg-icons';
import { difficulty } from 'src/app/api/difficulty.api';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredComponent implements OnInit {
  public difficulty = difficulty;

  faSun = faSun;
  faLungs = faLungs;
  faPaw = faPaw;
  @Input() public plant: Plant | undefined;

  ngOnInit(): void {}

  public get name(): string {
    const difficultyItem = difficulty.find(
      diffItem => diffItem.id === this.plant?.difficulty
    );
    return difficultyItem?.name ? difficultyItem.name : '';
  }
}
