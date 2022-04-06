import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { species } from 'src/app/api/species.api';
import { Plant } from 'src/app/interfaces/plant.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public plants$!: Observable<any[]>;
  public plants: any[] = [];
  selectedPlants = [{ species: 'Všechny' }];
  public checked: boolean = false;
  public selectedPlantIds: number[] = [];
  public species = species;

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private addQueryParams(ids: number[]): void {
    this.selectedPlantIds = ids;
    const str = this.selectedPlantIds.join(',');
    this.router.navigate(['/plant'], {
      queryParams: { species: str ? str : null },
      queryParamsHandling: 'merge'
    });
    console.log(this.selectedPlantIds);
  }

  public addItem(plant: Plant): void {
    this.selectedPlantIds.push(plant.id);
    const selectedPlantIds = [...this.selectedPlantIds];
    this.addQueryParams(selectedPlantIds);
  }

  public removeItem(plant: Plant): void {
    const selectedPlantIds = this.selectedPlantIds.filter(id => {
      return id !== plant.id;
    });
    this.addQueryParams(selectedPlantIds);
  }

  ngOnInit() {
    const checked = this.route.snapshot.queryParamMap.get('petFriendly');
    this.checked = checked === 'true';
    // this.filterService.getPlants().subscribe(x => {
    //   this.plants = x;
    // });
    this.loadPlants();
  }

  onCheckboxChange(evt: any) {
    // NEW: toggle checkbox worked but now (when new select was created) it's broken :-( >> not anymore
    const checked = evt.target.checked;
    console.log(checked);

    this.router.navigate(['plant'], {
      queryParams: { petFriendly: checked ? true : null },
      queryParamsHandling: 'merge'
    });
  }

  onSelectClick() {
    this.plants.filter(id => id === this.selectedPlantIds);
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
