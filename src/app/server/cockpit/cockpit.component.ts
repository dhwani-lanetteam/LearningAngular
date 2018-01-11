import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();

  // serverName: string = "";
  // serverContent: string = "";

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onBluprintAdd(serverNameInput: HTMLInputElement){
    // console.log(this.serverContentInput);
    this.blueprintAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onServerAdd(serverNameInput: HTMLInputElement){
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
