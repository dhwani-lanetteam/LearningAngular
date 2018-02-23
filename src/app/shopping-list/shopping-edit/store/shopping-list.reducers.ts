
import { Ingredient } from "../../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';




const initialState = {
  ingredients: [
    new Ingredient("Apple",1),
    new Ingredient("Butter",2),
    new Ingredient("Strawberry", 10)
  ]
}

//--- default value assignment
//--- new/updated state must be returned from reducer
//--- from the action that is dispatched, application state is decided
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, //--- expanding all property of old state object
        ingredients: [
          ...state.ingredients, //--- old one
          action.payload //--- new one received as part of action
          //--- action requires payload. payload is an extra information related to action. here in our case it is ingredient name and quantity. by default action has single property that is type. To add a payload check file shopping-list.actions.ts
        ], //--- over write single of the properties that is ingredient property
      }
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients, //--- old one
          ...action.payload //--- as we have multiple payload now, I used spread operator.
        ]
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      return {

      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const newIng = state.ingredients[action.payload.index];
      const updatedIng = {
        ...newIng,
        ...action.payload.newIngredient
      };
      const ings = [...state.ingredients];
      ings[action.payload.index] = updatedIng;
      return {
        ...state,
        ingredients: ings
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngs = [...state.ingredients];
          oldIngs.splice(action.payload, 1);
          return {
            ...state,
            ingredients: oldIngs
          }
    default:
      return state;
  }
}
