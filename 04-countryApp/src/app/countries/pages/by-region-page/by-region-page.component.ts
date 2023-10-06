import { Component, Input } from '@angular/core'
import { Country } from '../../interfaces/countrys.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  @Input()
  public countries: Country[] = []
  public value: string = 'region'

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string) {
    this.countriesService.search(term, this.value).subscribe((countries) => {
      this.countries = countries
    })
  }
}
