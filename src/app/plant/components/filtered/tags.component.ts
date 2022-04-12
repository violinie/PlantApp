import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { difficulty } from 'src/app/api/difficulty.api';
import { Plant } from 'src/app/interfaces/plant.interface';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {
  public difficulty = difficulty;
  @Input() public plant: Plant | undefined;

  public get name(): string {
    const diff = this.converEnumToId();
    return diff?.enum ? diff.enum : '';
  }

  public get difficultyId(): number {
    const diff = this.converEnumToId();
    return diff?.id ? diff.id : 0;
  }

  private converEnumToId() {
    return difficulty.find(
      diffItem => diffItem.enum === this.plant?.difficulty
    );
  }
}
