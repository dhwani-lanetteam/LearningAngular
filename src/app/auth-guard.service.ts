import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) : boolean
  {
    console.log("canActivate called");
    return true;
  }

}
