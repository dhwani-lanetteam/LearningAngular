import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  //-- currently active route(current URL) ni info apse
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // debugger
    console.log(this.activatedRoute.snapshot);
    this.user = {
      id: this.activatedRoute.snapshot.params['id'], // id key is defined in app module file. check const appRoutes
      name: this.activatedRoute.snapshot.params['name'] // check appRoutes const in app module
    };

    //-- when params change in URL and to update component using new params from URL
    //-- we need to subscribe the change in params
    //-- it is actually is observable
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params)=>{
      //params will have the updated data
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  ngOnDestroy(){
    //-- a suggested line to add whenever we subscribe something as when we move to another component we do not need this subscription anymore
    this.paramsSubscription.unsubscribe();
  }
}
