import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { faLungs, faPaw, faSun } from '@fortawesome/free-solid-svg-icons';
import { difficulty } from 'src/app/api/difficulty.api';
import { light } from 'src/app/api/light.api';
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

  public get lightName(): string {
    const lightObject = this.convertLightEnumtoObject();
    return lightObject?.enum ? lightObject.enum : '';
  }

  public difficultyId() {
    const diff = this.convertEnumtoObject();
    return diff?.id ? diff.id : null;
  }

  public lightId() {
    const lightObject = this.convertLightEnumtoObject();
    return lightObject?.id ? lightObject.id : null;
  }

  private convertEnumtoObject() {
    return difficulty.find(
      diffItem => diffItem.enum === this.plant?.difficulty
    );
  }

  private convertLightEnumtoObject() {
    return light.find(lightItem => lightItem.enum === this.plant?.light);
  }
}
