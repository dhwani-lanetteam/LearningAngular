import { Action } from "@ngrx/store";
import { Ingredient } from "../../../shared/ingredient.model";
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; //--- this is the only property of Actions
  payload: Ingredient; //--- Extra information that is added manually as per requirement
}

export type ShoppingListActions = AddIngredient;
