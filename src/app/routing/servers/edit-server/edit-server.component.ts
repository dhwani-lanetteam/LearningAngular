import { Component, OnInit } from '@angular/core';
import {ServersService} from "../servers.service";
import {ActivatedRoute, Route, Params, Router} from "@angular/router";
import {CanDeactivateGuard} from "./can-deactivate-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {

    // console.log("queryParams");
    // console.log(this.activatedRoute.snapshot);
    //
    // console.log("fragment");
    // console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });

    // this.server = this.serversService.getServer(1);
    const id = this.activatedRoute.snapshot.params['id'];
    console.log("id : " + id);
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    // go up one level to last loaded server(relativeTo)
    this.router.navigate(['../'], {relativeTo: this.activatedRoute} )
  }

  canDeactivate(): Observable<boolean> | boolean | Promise<boolean> {
    //actual logic wether I am allowed to leave component or not
    console.log("canDeactivate() of EditServerComponent called");
    if (!this.allowEdit){
      return true;
    } else if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      confirm("Do you want to LEAVE ?");
    } else {
      return true;
    }

  }


}
