import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //--- force to update on each data change
})
export class FilterPipe implements PipeTransform {

  //changing input of pipe will trigger the pipe being applied.
  //but changing data won't trigger the pipe being applied.
  //it may lead to performance issue



  transform(value: any, filterStatus: string, propName: string): any {
    let resultArray = [];
    if (value.length === 0 || filterStatus === '' ) {
      return value;

    }
    for (const item of value){
      if (item[propName] === filterStatus){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
