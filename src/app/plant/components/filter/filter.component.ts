import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  catchError,
  concat,
  distinctUntilChanged,
  Observable,
  of,
  Subject,
  switchMap,
  tap
} from 'rxjs';
import { Plant } from 'src/app/interfaces/plant.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  public plants$!: Observable<any[]>;
  public plants: any[] = [];
  selectedPlants = [{ species: 'Všechny' }];

  constructor(private filterService: DataService) {}

  ngOnInit() {
    this.filterService.getPlants().subscribe(x => {
      console.log('filterrr', x);
      this.plants = x;
    });
    this.loadPlants();
  }

  clearModel() {
    this.selectedPlants = [];
  }

  changeModel() {
    this.selectedPlants = [{ species: 'New Plant' }];
  }

  people$!: Observable<Plant[]>;
  peopleLoading = false;
  peopleInput$ = new Subject<string>();

  trackByFn(item: Plant) {
    return item.id;
  }

  private loadPlants() {
    this.people$ = concat(
      of([]), // default items
      this.peopleInput$.pipe(
        distinctUntilChanged(),
        tap(() => (this.peopleLoading = true)),
        switchMap(term =>
          this.filterService.getPlants(term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => (this.peopleLoading = false))
          )
        )
      )
    );
  }
}
