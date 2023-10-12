import { Component } from '@angular/core'
import { interval, tap } from 'rxjs'

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  public name: string = 'Camilo'
  public gender: 'male' | 'female' | 'No existe' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient() {
    if (this.name === 'Camilo') {
      return (this.name = 'Juana'), (this.gender = 'female')
    }
    return (this.name = 'Camilo'), (this.gender = 'male')
  }

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ]
  public clientMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': '2 clientes esperando',
    other: 'tenemos # clientes esperando',
  }

  public deleteClient() {
    this.clients.shift()
  }

  // keyValue pipe
  public person = {
    name: 'Camilo',
    age: 36,
    address: 'Cali, Colombia',
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa.')
    }, 3500)
  })
}
