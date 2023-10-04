import { Component, ViewChild, ElementRef } from '@angular/core'
import { GifsService } from '../../services/gifs.service'

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="search()"
      #inputSearch
    />
  `,
})
export class GifsSearchBoxComponent {
  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {}

  search(): void {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.search(newTag)

    this.tagInput.nativeElement.value = ''
  }
}
