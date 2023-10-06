import { Component, Input, Output } from '@angular/core'
import { Country } from '../../interfaces/countrys.interface'
import { CountriesService } from '../../services/countries.service'
import { CacheValueType, region } from '../../interfaces/region.type'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  @Input()
  public countries: Country[] = []
  public value: string = 'region'
  public regions: region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: region
  public cacheValueType: CacheValueType = 'byRegion'


  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cahceStore.byRegion.countries
    console.log(this.countriesService.cahceStore.byRegion.region)

    this.selectedRegion = this.countriesService.cahceStore.byRegion.region
  }

  searchByRegion(term: region) {
    this.selectedRegion = term
    this.countriesService
      .search(term, this.value, this.cacheValueType, this.selectedRegion)
      .subscribe((countries) => {
        this.countries = countries
      })
  }
}
