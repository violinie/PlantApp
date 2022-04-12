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
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  public difficulty = difficulty;

  faSun = faSun;
  faLungs = faLungs;
  faPaw = faPaw;
  @Input() public plant: Plant | undefined;

  ngOnInit(): void {}

  public get name(): string {
    const diff = this.convertEnumtoObject();
    return diff?.enum ? diff.enum : '';
  }

  public difficultyId() {
    const diff = this.convertEnumtoObject();
    return diff?.id ? diff.id : null;
  }

  private convertEnumtoObject() {
    return difficulty.find(
      diffItem => diffItem.enum === this.plant?.difficulty
    );
  }
}
