import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickedTab = new EventEmitter<{clickedTab: string}>();

  constructor() { }

  ngOnInit() {
  }

  // onShoppingListClick(clickedElement: string = ""){
  //   this.clickedTab.emit({clickedTab: clickedElement});
  // }
  //
  // onRecipeClick(clickedElement: string = ""){
  //   this.clickedTab.emit({clickedTab: clickedElement});
  // }

}
