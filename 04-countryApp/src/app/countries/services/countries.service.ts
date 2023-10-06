import { Country } from '../interfaces/countrys.interface'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) {}

  search(term: String, value: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}${value}/${term}`).pipe(
      catchError(() => {
        return of([])
      })
    )
  }
}
