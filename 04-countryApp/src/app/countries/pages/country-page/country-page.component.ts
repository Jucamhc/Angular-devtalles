import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CountriesService } from '../../services/countries.service'
import { switchMap } from 'rxjs'
import { Country } from '../../interfaces/countrys.interface'

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public value: string = 'alpha'
  public country?: Country

  constructor(
    private activated: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activated.params
      .pipe(switchMap(({ id }) => this.countriesService.search(id, this.value)))
      .subscribe((country) => {
        if (!country[0]) return this.router.navigateByUrl('')
        console.log('TENEMOS UN PAIS')

        return (this.country = country[0])
      })
  }
}
