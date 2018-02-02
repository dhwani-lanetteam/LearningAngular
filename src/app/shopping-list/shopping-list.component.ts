import {Component, OnInit, OnDestroy} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {HelpeerServiceService} from "../shared/helpeer-service.service";
import {ShoppinglistService} from "./service/shoppinglist.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ HelpeerServiceService ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  // private subscription: Subscription = new Subscription();
  private ingredientsChangesSubscription = new Subscription();

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {

    this.ingredients = this.shoppinglistService.getIngredients();
    this.ingredientsChangesSubscription = this.shoppinglistService.ingredientsChangesSbjct.subscribe((ings: [Ingredient]) => {
      console.log("this ing is added : " + ings);
      this.ingredients = ings;
    });
  }

  ngOnDestroy(){
    //--- as I have created my own subject I need to unsubscribe it as angular won't manage it.
    //--- to prevent any memory leak unsubscribe it in ngOnDestroy
    // this.subscription.unsubscribe();
    this.ingredientsChangesSubscription.unsubscribe();
  }

  onEditItem(ingredient: Ingredient, index: number){
    console.log("shopping-list component" );
    console.log(ingredient);
    this.shoppinglistService.startedEditing.next(index);
  }

}
