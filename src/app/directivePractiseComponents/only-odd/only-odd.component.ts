import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-odd',
  templateUrl: './only-odd.component.html',
  styleUrls: ['./only-odd.component.css']
})
export class OnlyOddComponent implements OnInit {

  // numbers = [1,2,3,4,5,6,7,8,9,10];
  onlyOdd = false;
  oddNumbers = [1,3,5,7,9];
  evenNumbers = [2,4,6,8,10];

  constructor() { }

  ngOnInit() {
  }

}
