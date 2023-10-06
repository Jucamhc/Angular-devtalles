import { Country } from '../interfaces/countrys.interface'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, delay, tap } from 'rxjs'
import { CacheStore } from '../interfaces/cache-store.interface'
import { CacheValueType, region } from '../interfaces/region.type'

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/'

  public cahceStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
    countryPage: { term: '', countries: [] },
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
  }

  private saveTolocalStorage() {
    localStorage.setItem('cahceStore', JSON.stringify(this.cahceStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cahceStore')) return

    this.cahceStore = JSON.parse(localStorage.getItem('cahceStore')!)
  }

  search(
    term: string,
    value: string,
    cacheValueType: CacheValueType,
    region?: region
  ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}${value}/${term}`).pipe(
      tap((countries) => {
        if (cacheValueType === 'byRegion') {
          console.log(region)
          return (this.cahceStore.byRegion = {
            region,
            countries,
          })
        }

        return (this.cahceStore[`${cacheValueType}`] = { term, countries })
      }),
      tap(() => this.saveTolocalStorage()),
      catchError(() => of([]))
      /* delay(2000) */
    )
  }
}
