import { Injectable } from '@angular/core';

@Injectable()
export class HelpeerServiceService {

  constructor() { }

  ucfirst(str: string){
    var firstLetter = str.slice(0,1);
    return firstLetter.toUpperCase() + str.substring(1);
  }

}
