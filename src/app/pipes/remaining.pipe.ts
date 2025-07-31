import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(value: any, maxCharsAllowed: any = 100) {
    return maxCharsAllowed - value.length;
  }

}
