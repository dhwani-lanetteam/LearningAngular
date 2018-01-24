import { Component, OnInit } from '@angular/core';
import {ServersService} from "../servers.service";
import {ActivatedRoute, Params, Router, Data} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // debugger
    //---- server is fetched using activated route queryParams
    // if (this.activatedRoute.snapshot.params['id']){
    //   this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);
    // }
    //
    // this.activatedRoute.params.subscribe((param: Params) => {
    //   this.server = this.serversService.getServer(+param['id']);
    // })

    //---- server is loaded in advance using resolver
    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data['server']; //'server' shpould match with key defined in 'resolve' Offcourse !!!  check app-routing.module.ts

    });

  }

  onEditServer() {
    //-- here `edit` is the relative path
    //-- when path is specified without / in starting then it is absolute path
    //-- here we have used relative path. relative path needs to be specified the relative route that is why one more object containing `relativeTo` key is passed as argument
    //-- when we navigate to edit-server component default behaviour is to drop the old query params and fragments. we can carry them forward by using `queryParamsHandling`
    //-- 2 possible value for this key 1) preserve and 2) merge
    //-- default behaviour is to drop the query params
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }
}
