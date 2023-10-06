import { Component } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countrys.interface'

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = []
  public value:string = 'capital'

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.search(term, this.value).subscribe((countries) => {
      this.countries = countries
    })
  }
}
