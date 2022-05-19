import { Component, OnInit, Output } from '@angular/core';
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
import { light } from 'src/app/api/light.api';
import { plants } from 'src/app/api/plants.api';
import { species } from 'src/app/api/species.api';
import { Plant } from 'src/app/interfaces/plant.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() public attribute: 'petFriendly' | 'hydroponics' | 'purifyAir' | '' =
    '';
  @Output() public checkbox: boolean | undefined = false;
  public plants$!: Observable<any[]>;
  public plants: any[] = [];
  public selectedSpecies: number[] = [];
  public selectedLevel: number[] = [];
  public selectedLight: number[] = [];
  public difficulty = difficulty;
  public light = light;
  public species = species;
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
      const lightParams = params.get('light');
      if (speciesParams) {
        this.selectedSpecies = speciesParams.split(',').map(Number);
      }
      if (difficultyParams) {
        this.selectedLevel = difficultyParams.split(',').map(Number);
      }
      if (lightParams) {
        this.selectedLight = lightParams.split(',').map(Number);
      }
      this.plants = plants;
    });
    this.loadPlants();
  }

  changeItems(plants: Plant[], attribute: string) {
    const selectedPlantIds = plants.map(plant => plant.id);
    this.addQueryParams(selectedPlantIds, attribute);
  }

  onReset() {
    this.router.navigate(['plant'], {});
    this.selectedSpecies = [];
    this.selectedLevel = [];
    this.selectedLight = [];
    this.checkbox = false;
  }

  plant$!: Observable<Plant[]>;
  plantLoading = false;
  peopleInput$ = new Subject<string>();

  trackByFn(item: Plant) {
    return item.id;
  }

  private loadPlants() {
    this.plant$ = concat(
      of([]), // default items
      this.peopleInput$.pipe(
        distinctUntilChanged(),
        tap(() => (this.plantLoading = true)),
        switchMap(term =>
          this.filterService.getPlants(term).pipe(
            catchError(() => of([])), // empty list on error
            tap(() => (this.plantLoading = false))
          )
        )
      )
    );
  }
}
function Input() {
  throw new Error('Function not implemented.');
}
