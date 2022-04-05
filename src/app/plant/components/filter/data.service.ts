import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { plants } from 'src/app/api/plants.api';
import { Plant } from 'src/app/interfaces/plant.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getPlants(term: string = ''): Observable<Plant[]> {
    let items = plants;

    // if (term) {
    //   items = items.filter(
    //     x =>
    //       x.species.indexOf(term.toLocaleLowerCase()) > -1
    //   );
    // }

    return of(items).pipe(delay(500));
  }
}
