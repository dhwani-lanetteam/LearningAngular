import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ServersService {

  private dbCnnUrl: string = 'https://ng4-http-demo.firebaseio.com/data.json'; //firebase specific data.json
  constructor(private httpClient: HttpClient) {

  }

  stroreServer(servers: any[]){
    let header = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.httpClient.post(this.dbCnnUrl, servers,{headers: header});
  }

  getServers(){
    return this.httpClient.get(this.dbCnnUrl);
  }

}
