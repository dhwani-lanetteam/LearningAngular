import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none, native
})

export class ServerElementComponent implements OnInit {

  //@Input decorator used to expose the property outside the component
  //In order to use @Input we need to import it first
  //the property element can be used with alias synatx : (2)

  // @Input() element: {
  //   type: string,
  //   name: string,
  //   content: string
  // };

  //(2)
  @Input('eleAlias') element: {
    type: string,
    name: string,
    content: string
  }

  constructor() { }

  ngOnInit() {
  }

}
