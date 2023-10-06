import {
  Component,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core'
import { Subject, Subscription, debounceTime } from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription

  @Input()
  public placeholder: string = ''

  @Input()
  public inicialValue: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(400))
      .subscribe((value) => this.onDebounce.emit(value))
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  emiterInput(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}
