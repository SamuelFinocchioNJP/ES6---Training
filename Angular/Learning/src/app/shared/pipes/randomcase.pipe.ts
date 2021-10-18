import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomcase',
})
export class RandomcasePipe implements PipeTransform {
  transform(content: string): string {
    // return content.toUpperCase();
    return [...content]
      .map((char, i) => {
        return i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      })
      .join('');
  }
}
