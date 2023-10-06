import { Component, OnInit, Output } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/countrys.interface'
import { CacheValueType } from '../../interfaces/region.type'

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  public value: string = 'capital'

  public countries: Country[] = []
  @Output()
  public inicialValue: string = ''

  public isLoading: boolean = false
  public cacheValueType: CacheValueType = 'byCapital'

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cahceStore.byCapital.countries
    this.inicialValue = this.countriesService.cahceStore.byCapital.term
  }

  searchByCapital(term: string): void {
    this.isLoading = true
    this.countriesService
      .search(term, this.value, this.cacheValueType)
      .subscribe((countries) => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
