import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { HelpeerServiceService } from "../shared/helpeer-service.service";
import { ShoppinglistService } from "./service/shoppinglist.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ HelpeerServiceService ]
})
export class ShoppingListComponent implements OnInit {

  shoppilnListState: Observable<{ingredients: Ingredient[]}>;

  //--- type specified for store should fit the global state.
  constructor(private shoppinglistService: ShoppinglistService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppilnListState = this.store.select('shoppingList'); //--- In global state I have shoppingList part, which points to shoppingListReducer, there we have set initial state as javascript object with ingredients property. Slicing the store. selectiong the part in which I am interested.

  }

  onEditItem(ingredient: Ingredient, index: number){
    console.log("shopping-list component" );
    console.log(ingredient);
    this.shoppinglistService.startedEditing.next(index);
  }

}
