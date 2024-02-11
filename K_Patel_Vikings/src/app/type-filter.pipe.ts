import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(contentArray: Content[], type?: string): Content[] {
    if (!type || type === '') {
      // If type is not provided or empty, return all contentArray
      return contentArray;
    } else {
      // Filter contentArray by the provided type
      return contentArray.filter((content) => content.type === type);
    }
  }
}
