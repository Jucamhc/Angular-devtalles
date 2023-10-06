import { Component, Input } from '@angular/core'
import { Country } from '../../interfaces/countrys.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  @Input()
  public countries: Country[] = []
  public value: string = 'name'

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string) {
    this.countriesService.search(term, this.value).subscribe((countries) => {
      this.countries = countries
    })
  }
}
