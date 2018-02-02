import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import {RecipeService} from "../service/recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeName: string;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
    console.log("RecipeEditComponent called");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params : ");
      console.log(params);
      this.recipeName = params['name'];
      this.editMode = params['name'] != null;
      console.log("editmode : " + this.editMode);
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  // private initForm() {
  //   let recipeName = '';
  //   let recipeImagePath = '';
  //   let recipeDescription = '';
  //   let recipeIngredients = new FormArray([]);
  //
  //   if (this.editMode) {
  //     const recipe = this.recipeService.getRecipe(this.id);
  //     recipeName = recipe.name;
  //     recipeImagePath = recipe.imagePath;
  //     recipeDescription = recipe.description;
  //     if (recipe['ingredients']) {
  //       for (let ingredient of recipe.ingredients) {
  //         recipeIngredients.push(
  //           new FormGroup({
  //             'name': new FormControl(ingredient.name, Validators.required),
  //             'amount': new FormControl(ingredient.amount, [
  //               Validators.required,
  //               Validators.pattern(/^[1-9]+[0-9]*$/)
  //             ])
  //           })
  //         );
  //       }
  //     }
  //   }
  //
  //   this.recipeForm = new FormGroup({
  //     'name': new FormControl(recipeName, Validators.required),
  //     'imagePath': new FormControl(recipeImagePath, Validators.required),
  //     'description': new FormControl(recipeDescription, Validators.required),
  //     'ingredients': recipeIngredients
  //   });
  // }

}
