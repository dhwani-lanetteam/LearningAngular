import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignupComponent} from "./authentication/signup/signup.component";
import {SigninComponent} from "./authentication/signin/signin.component";
import {HomeComponent} from "./core/home/home.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  // {
  //   path: "",
  //   redirectTo: '/recipes', //domain/ only will be redirected to recipe component
  //   pathMatch: "full"
  // },
  {
    path: "",
    component: HomeComponent
  },
  //--- this is lazy loading
  //--- component will be loaded only when we need, not before that
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipesModule"
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
    path: "signin",
    component: SigninComponent
  }
  //------ the devil
  // {
  //   path: "not-found",
  //   component: PageNotFoundComponent
  // },
  // {
  //   path: '**',
  //   component: ErrorPageComponent,
  //   //passing static data to route
  //   data: {
  //     message: 'Page not found !!!!! :('
  //   }
  // }
  //------- the devil
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
