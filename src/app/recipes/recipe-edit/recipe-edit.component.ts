import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeName: string;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
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

}
