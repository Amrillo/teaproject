import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcut'
})
export class TextcutPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').slice(0,54).join(' ') + "..." ;
  }

}
