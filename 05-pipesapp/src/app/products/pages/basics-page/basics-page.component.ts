import { Component } from '@angular/core'

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public namaLower: string = 'camilo'
  public nameUpper: string = 'CAMILO'
  public fullName: string = 'JuaN CamIlO'

  public customDate = new Date()
}
