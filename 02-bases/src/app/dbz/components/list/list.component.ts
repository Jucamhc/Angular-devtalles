import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public deletedCharater: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    {
      id: "0",
      name: 'Trunks',
      power: 10,
    },
  ]

  onDeleteCharater(id: string): void {
    TODO: 'Emitir el ID del personaje'
    //console.log('index: ' + index)

    this.deletedCharater.emit(id)
  }
}
