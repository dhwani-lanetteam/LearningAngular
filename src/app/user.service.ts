import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class UserService {

  //-- Subject can be used for cross component communication
  //-- Event emitting can also implemented using Subject
  //-- it can be trigger from anywhere and subscribed anywhere,too
  userActivated = new Subject();

  constructor() { }

}
