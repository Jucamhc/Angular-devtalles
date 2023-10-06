import {
  Component,
  Input,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  emiterInput(value: string): void {
    this.onValue.emit(value)
  }
}
