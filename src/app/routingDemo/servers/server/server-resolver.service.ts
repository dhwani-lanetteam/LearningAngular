import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ServersService} from "../servers.service";

interface ServerIntrfc {
  id: number,
  name: string,
  status: string
}

//if i want to inject service into another service them use this decorator
@Injectable()
export class ServerResolverService implements Resolve<ServerIntrfc>{

  constructor(private serversService: ServersService) {
    console.log("ServerResolverService called");
  }

  //this resolver will do loading of data in advance
  //ofcourse we can do data loadin g in ngOnInit. this is just a better alternative
  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot,
          routerStateSnapshot: RouterStateSnapshot): Observable<ServerIntrfc> | Promise<ServerIntrfc> | ServerIntrfc {
    return this.serversService.getServer(+activatedRouteSnapshot.params['id']); //casting with + sign
  }

}
