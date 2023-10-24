import { Component } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
  providers: [MessageService],
})
export class MenuComponent {
  public meniItems: MenuItem[] = []

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.meniItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/number',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items:[
          {
            label: 'Custom Pipe',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      },
    ]
  }
}
