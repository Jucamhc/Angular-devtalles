import { Component } from '@angular/core'
import { GifsService } from 'src/app/gifs/services/gifs.service'

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get getGifsServis() {
    return this.gifsService.tagsHistory
  }

  searchService(world:string){
    this.gifsService.search(world)
  }
}
