import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-ng-switch',
//   template: `
//     <div class="container">
//       <div class="row">
//         <h4>NgIf</h4>
//       </div>
//       <hr>
//       <div class="row">
//         <ul *ngFor="let person of people">
//           <li *ngIf="person.age > 30">
//           {{ person.name }} ({{ person.age }})
//           </li>
//         </ul>
//       </div>
//     </div>
//
// `
// })

@Component({
  selector: 'app-ng-switch',
  template: `
    <div class="container">
      <div class="row">
        <h4>NgSwitch</h4>  
      </div>
      <hr>
      <div class="row">
        <ul *ngFor="let person of people"
            [ngSwitch]="person.country">
          <li *ngSwitchCase="'IN'"
              class="text-primary">
            {{ person.name }} ({{ person.country }})
          </li>
          <li *ngSwitchCase="'UK'"
              class="text-danger">
            {{ person.name }} ({{ person.country }})
          </li>
          <li *ngSwitchCase="'USA'"
              class="text-warning">
            {{ person.name }} ({{ person.country }})
          </li>
          <li *ngSwitchCase="'GE'"
              class="text-success">
            {{ person.name }} ({{ person.country }})
          </li>
          <li *ngSwitchDefault="">
            {{ person.name }} ({{ person.country }})
          </li>
          
        </ul>
      </div>
    </div>
    
`
})
export class NgSwitchDemoComponent implements OnInit {

  people: any[] = [
    {
      name: "person 1",
      age: 29,
      country: "IN"
    },
    {
      name: "person 1",
      age: 30,
      country: "USA"
    },
    {
      name: "person 2",
      age: 31,
      country: "UK"
    },
    {
      name: "person 3",
      age: 32,
      country: "GE"
    },
    {
      name: "person 5",
      age: 29,
      country: "IN"
    },
    {
      name: "person 4",
      age: 33,
      country: "Default"
    },
    {
      name: "person 12",
      age: 31,
      country: "Default"
    },
    {
      name: "person 2",
      age: 31,
      country: "UK"
    },
    {
      name: "person 22",
      age: 31,
      country: "Default"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
