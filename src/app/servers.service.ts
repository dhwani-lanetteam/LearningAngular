import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

interface ServerResponse {
  name: string,
  capacity: number,
  id: number
}

@Injectable()
export class ServersService {

  private dbCnnUrl: string = 'https://ng4-http-demo.firebaseio.com/data.json'; //firebase specific data.json

  constructor(private httpClient: HttpClient) {

  }

  storeServer(servers: any[]){

    // let header = new HttpHeaders({
    //   'Content-Type':'application/json'
    // });
    // return this.httpClient.post(this.dbCnnUrl, servers,{headers: header});

    let header = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.httpClient.put(this.dbCnnUrl, servers,{headers: header});
  }

  getServers(): Promise<any>
  {
    // return this.httpClient.get(this.dbCnnUrl);

    let promise = new Promise((resolve, reject) => {
      this.httpClient.get(this.dbCnnUrl)
        .toPromise()
        .then((response: HttpResponse<ServerResponse>) => {
          console.log("response getServers : ", response);
          resolve(response);
        });
    });

    return promise;


    // this.httpClient.get(this.dbCnnUrl).subscribe(
    //   (response: HttpResponse<ServerResponse>) => {
    //     console.log("response : ");
    //     console.log(response);
    //
    //     const promise = new Promise((reject,  resolve) => {
    //       resolve(response);
    //     });
    //      return promise
    //   },
    //   (error) => {
    //     return error;
    //   }
    // );
    // return null;
  }

  getAppName(){
    const url = 'https://ng4-http-demo.firebaseio.com/appName.json';

    let promise = new Promise<any>((resolve,reject) => {
      this.httpClient.get(url).
        toPromise()
        .then(
          (response) => {
            console.log("response : ", response);
            resolve(response);
          },
          (error) => {
            console.log("error : ", error);
            reject(error);
          }
        )
    });

    return promise;
  }

}
