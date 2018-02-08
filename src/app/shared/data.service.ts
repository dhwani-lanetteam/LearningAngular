import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/service/recipe.service";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class DataService {

  private dbCnnUrl: string = 'https://ng-receipe-book-74e8a.firebaseio.com/';
  private recipeNode = 'https://ng-receipe-book-74e8a.firebaseio.com/recipes.json';


  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService
  ) { }

  storeRecipes(){
    let promise = new Promise((resolve, reject) => {
      this.httpClient.put(this.recipeNode, this.recipeService.getRecipes())
        .toPromise()
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });
    return promise

  }

  getRecipes(): Promise<any>
  {
    let promise = new Promise<any>((resolve, reject) => {
      this.httpClient.get(this.recipeNode)
        .toPromise()
        .then(
          (response: HttpResponse<any>) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });

    return promise;
  }



}
