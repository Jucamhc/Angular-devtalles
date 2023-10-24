import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'vuela',
})
export class Vuela implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : 'No vuela'
  }
}
