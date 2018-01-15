import { Component, OnInit } from '@angular/core';
import {ServersService} from "./servers.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    //-- with routerLink attr `servers` will give error because it will look for path http://localhost:4201/servers/servers
    //-- unlike routerLink navigate method does not know on which path yoy are currently.
    //-- routerLink attr knows on which component you seat
    //-- to tell navigate method where we are currently need to pass another parameter
    //-- default value of relativeTo prop is current domain http://localhost:4201
    this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
