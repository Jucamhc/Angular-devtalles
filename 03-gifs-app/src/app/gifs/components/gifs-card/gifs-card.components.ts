import { Component, Input, OnInit } from '@angular/core'
import { Gif } from '../../interfaces/gifs.interfaces'

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.components.html',
})
export class gifsCardComponent{
  @Input()
  public gif!: Gif


}
