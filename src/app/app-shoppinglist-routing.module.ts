import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes/recipes.component";
import {PageNotFoundComponent} from "./routing/page-not-found/page-not-found.component";
import {ErrorPageComponent} from "./routing/error-page/error-page.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./authentication/signup/signup.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: '/recipes', //domain/ only will be redirected to recipe component
    pathMatch: "full"
  },
  {
    path: "recipes", //domain/recipes
    component: RecipesComponent,
    children: [
      {
        path: "", //domain/recipes/
        component: RecipeStartComponent
      },
      /*
      * there was conflict
      * http://localhost:4200/recipes/new
      * http://localhost:4200/recipes/Test%20Recipe%203
      * if :name path appears first then it will load RecipeDetailComponent
      * so priority in defining routes matters
      * */
      {
        path: "new",
        component: RecipeEditComponent
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent
      },
      {
        path: ":id", //domain/recipes/recipename
        component: RecipeDetailComponent,
      }
    ]
},
  {
    path: "shopping-list", //domain/shopping-list
    component: ShoppingListComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "not-found",
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: ErrorPageComponent,
    //passing static data to route
    data: {
      message: 'Page not found !! :('
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  //exports says to angular that from this module,
  //if I want to add this module to the imports of another module,
  //what should be accessible to this module which imports this module
  exports: [
    RouterModule
  ]

})

export class AppShoppinglistRouting {

}
