import { Component } from '@angular/core';
import {ServersService} from "./servers.service";
import {HttpResponse} from "@angular/common/http";

interface ServerResponse {
  name: string,
  capacity: number,
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  }

  onSaveServer(){
    //no need to unsubscribe as angular will manage
    this.serverService.stroreServer(this.servers).subscribe(
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
    this.serverService.getServers().subscribe(
      (response: HttpResponse<ServerResponse>) => {
        console.log("ServerResponse : ");
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
