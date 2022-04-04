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

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public addItem(plant: Plant): void {
    this.selectedPlantIds.push(plant.id);
    this.selectedPlantIds = [...this.selectedPlantIds];
    console.log('add', this.selectedPlantIds);
  }

  public removeItem(plant: Plant) {
    let selectedPlantIds = this.selectedPlantIds;
    this.selectedPlantIds = selectedPlantIds.filter(id => {
      console.log('remove', id, plant.id);
      return id !== plant.id;
    });
  }

  ngOnInit() {
    const checked = this.route.snapshot.queryParamMap.get('petFriendly');
    this.checked = checked === 'true';
    console.log(this.checked, checked);
    this.filterService.getPlants().subscribe(x => {
      this.plants = x;
    });
    this.loadPlants();
  }

  onCheckboxChange(evt: any) {
    console.log(evt.target.checked);
    const checked = evt.target.checked;
    const queryParams = checked ? { petFriendly: true } : {};

    this.router.navigate(['plant'], {
      queryParams
    });
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
