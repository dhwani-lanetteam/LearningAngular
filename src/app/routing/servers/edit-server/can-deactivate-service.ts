import {Observable} from "rxjs/Observable";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

//need of interface (Just Logic Understandig)
//angular router can execute canDeactivate in this service, can rely on fact that the component I am currently on has canDeactivate method,too where I will implement logic to perform check for leaving component
//need this connection between guard and component
export interface CanComponentDeactivate {
  canDeactivate : () => Observable<boolean> | boolean | Promise<boolean>;
}

//CanDeactivate is generic type which wraps CanComponentDeactivate
//it force class that implements it to define canDeactivate method
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  //defined here
  //will be called by angular router once i try to leave component
  //it can have only that component which implements CanComponentDeactivate interface
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot //? says that this parameter is optional
  ): Observable<boolean> | boolean | Promise<boolean>
  {
    console.log("canDeactivate of CanDeactivateGuard called");
    return component.canDeactivate(); //canDeactivate of component I am currently on will be called

  }

}
