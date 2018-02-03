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

  // recipeName: string;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
    console.log("RecipeEditComponent called");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params : ");
      console.log(params);
      this.recipeId = params['id'];
      this.editMode = params['id'] != null;
      console.log("editmode : " + this.editMode);
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    console.log("this.recipeName : ", this.recipeId);
    console.log("this.recipeForm.value : ", this.recipeForm.value);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    //--- explicitly cast by specifying type in <>
    //--- add empty text box for ingredient name and amount
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'amount': new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
    }));
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      recipeName = this.recipeService.getRecipe(this.recipeId).name;
      recipeDescription = this.recipeService.getRecipe(this.recipeId).description;
      recipeImagePath = this.recipeService.getRecipe(this.recipeId).imagePath;

      if (this.recipeService.getRecipe(this.recipeId).ingredients){
        for (let ing of (this.recipeService.getRecipe(this.recipeId).ingredients)){
          console.log("ing : ", ing);
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name, [Validators.required]),
            'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
          }));
        }
      }
    }//

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath' : new FormControl(recipeImagePath, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }
}
