import { Component } from '@angular/core';
import {ServersService} from "./servers.service";
// import {HttpResponse} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appName: string;

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServersService){
    this.serverService.getAppName().then(
      (response) => {
        this.appName = response;
      },
      (error) => {
        console.log("error : ",error);
      }
    )
  }

  onSaveServer(){
    //no need to un subscribe as angular will manage
    this.serverService.storeServer(this.servers).subscribe(
      (response) => {
        console.log("response : ");
        console.log(response);
      },
      (error) => {
        console.log("error : " , error);
      }
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGetServers(){
    // let data = this.serverService.getServers();
    this.serverService.getServers().then(
      (response) => {
        console.log("onGetServers : response : ");
        console.log(response);
      }
    );

  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
