import { Component, Input, OnInit, Output } from '@angular/core'
import { Country } from '../../interfaces/countrys.interface'
import { CountriesService } from '../../services/countries.service'
import { CacheValueType } from '../../interfaces/region.type'

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  @Input()
  public countries: Country[] = []
  public value: string = 'name'
  public cacheValueType: CacheValueType = 'byCountries'

  @Output()
  public inicialValue: string = ''

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cahceStore.byCountries.countries
    this.inicialValue = this.countriesService.cahceStore.byCountries.term
  }

  searchByCountry(term: string) {
    this.countriesService
      .search(term, this.value, this.cacheValueType)
      .subscribe((countries) => {
        this.countries = countries
      })
  }
}
