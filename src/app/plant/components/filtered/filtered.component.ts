import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { faLungs, faPaw, faSun } from '@fortawesome/free-solid-svg-icons';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredComponent implements OnInit {
  faSun = faSun;
  faLungs = faLungs;
  faPaw = faPaw;
  @Input() public plant: Plant | undefined;

  ngOnInit(): void {}
}
