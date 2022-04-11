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
import { difficulty } from 'src/app/api/difficulty.api';
import { plants } from 'src/app/api/plants.api';
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
  public selectedSpecies: number[] = [];
  public selectedLevel: number[] = [];
  public checkPoisonous: boolean = false;
  public checkHydro: boolean = false;
  public checkAir: boolean = false;
  public species = species;
  public difficulty = difficulty;
  public plantsApi = plants;

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private addQueryParams(ids: number[], attribute: string): void {
    const str = ids.join(',');
    this.router.navigate(['/plant'], {
      queryParams: { [attribute]: str ? str : null },
      queryParamsHandling: 'merge'
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const speciesParams = params.get('species');
      const difficultyParams = params.get('difficulty');
      if (speciesParams) {
        this.selectedSpecies = speciesParams.split(',').map(Number);
      }
      if (difficultyParams) {
        this.selectedLevel = difficultyParams.split(',').map(Number);
      }
      this.plants = plants;
    });

    this.checkPoisonous = this.handleCheckboxes('petFriendly');
    this.checkHydro = this.handleCheckboxes('hydroponics');
    this.checkAir = this.handleCheckboxes('purifyAir');
    this.loadPlants();
  }

  private handleCheckboxes(checkboxName: string): boolean {
    const checked = this.route.snapshot.queryParamMap.get(checkboxName);
    return checked === 'true';
  }

  onCheckboxChange(
    evt: any,
    checkbox: boolean,
    attribute: 'petFriendly' | 'hydroponics' | 'purifyAir'
  ) {
    // toggle checkbox
    const checked = evt.target.checked;
    checkbox = checked;

    this.router.navigate(['plant'], {
      queryParams: {
        [attribute]: checked ? true : null
      },
      queryParamsHandling: 'merge'
    });
  }

  changeItems(plants: Plant[], attribute: string) {
    console.log('plants', plants);
    const selectedPlantIds = plants.map(plant => plant.id);
    this.addQueryParams(selectedPlantIds, attribute);
  }

  onReset() {
    this.router.navigate(['plant'], {});
    this.selectedSpecies = [];
    this.selectedLevel = [];
    this.checkAir = false;
    this.checkHydro = false;
    this.checkPoisonous = false;
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
