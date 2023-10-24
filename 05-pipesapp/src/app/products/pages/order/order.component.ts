import { Component } from '@angular/core'
import { Color, Hero } from '../../interfaces/hero.interface'

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = true
  public orderBy: keyof Hero | undefined | '' = ''

  public hearoes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: false,
      color: Color.green,
    },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(sortBy: keyof Hero): void {
    this.orderBy = sortBy
  }
}
