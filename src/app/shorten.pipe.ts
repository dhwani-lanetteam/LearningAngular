import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length > args)
      return value.substr(0,10)+" ..."; // first to ten character
    else
      return value;
  }

}
