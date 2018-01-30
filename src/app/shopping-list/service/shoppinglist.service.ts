import {Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppinglistService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apple",1),
    new Ingredient("Butter",2)
  ];

  // ingredientsChangesEmtr: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  ingredientsChangesSbjct: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  ingredientAddedEmtr: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  ingredientEditedEmtr: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }


  onAddClick(ingName: string, ingAmount: string){
    console.log("shoppinglist service onAddClick");
    console.log("name : "+ingName);
    console.log("ingAmount : "+ingAmount);
    this.ingredients.push(new Ingredient((ingName).toLowerCase(), parseInt(ingAmount)));
    this.ingredientAddedEmtr.emit(new Ingredient((ingName).toLowerCase(), parseInt(ingAmount)));
    console.log("after push");
    console.log(this.ingredients);
    // this.ingredientsChangesEmtr.emit(this.ingredients.slice());
    this.ingredientsChangesSbjct.next(this.ingredients.slice());
  }

  onEditClick(ingredient: Ingredient){
    console.log("onEditClick shoppinglist service");
    console.log("edit this : ");
    console.log(ingredient.name);
    console.log(ingredient.amount);
    this.ingredientEditedEmtr.emit(ingredient);

  }

  onDeleteClick(){
    console.log("onDeleteClick");
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    // this.ingredientsChangesEmtr.emit(this.ingredients.slice());
    this.ingredientsChangesSbjct.next(this.ingredients.slice());
  }
}





