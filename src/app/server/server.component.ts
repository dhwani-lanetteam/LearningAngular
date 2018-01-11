import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers = [
    {
      type: 'blueprint',
      name: 'Dhwani',
      content: 'Dhwani Server Content!'
    },
    {
      type: 'server',
      name: 'Vaidehi',
      content: 'Vaidehi Server Content!'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  onBluprintAdded(event){
    this.servers.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent
    });
  }

  onServerAdded(event){
    this.servers.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent
    });
  }


}
