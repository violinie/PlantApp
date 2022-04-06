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
  selectedPlants = [];
  public checked: boolean = false;
  public species = species;

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private addQueryParams(ids: number[]): void {
    const str = ids.join(',');
    this.router.navigate(['/plant'], {
      queryParams: { species: str ? str : null },
      queryParamsHandling: 'merge'
    });
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
    // toggle checkbox
    const checked = evt.target.checked;
    console.log(checked);

    this.router.navigate(['plant'], {
      queryParams: { petFriendly: checked ? true : null },
      queryParamsHandling: 'merge'
    });
  }

  // public addItem(plant: Plant): void {
  //   this.selectedPlantIds.push(plant.id);
  //   const selectedPlantIds = [...this.selectedPlantIds];
  //   this.addQueryParams(selectedPlantIds);
  // }

  // public removeItem(plant: Plant): void {
  //   const selectedPlantIds = this.selectedPlantIds.filter(id => {
  //     return id !== plant.id;
  //   });
  //   this.addQueryParams(selectedPlantIds);
  // }

  changeItems(plants: Plant[]) {
    console.log('plants', plants);
    const selectedPlantIds = plants.map(plant => plant.id);
    this.addQueryParams(selectedPlantIds);
  }

  onReset() {
    this.router.navigate(['plant'], {});
    this.selectedPlants = [];
  }

  clearModel() {
    this.selectedPlants = [];
  }

  changeModel() {
    this.selectedPlants = [];
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
