import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vikingsPower',
  standalone: true
})
export class VikingsPowerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
