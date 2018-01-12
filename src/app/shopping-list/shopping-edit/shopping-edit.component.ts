import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppinglistService} from "../service/shoppinglist.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @Output() ingredientAddEmitter = new EventEmitter<Ingredient>();
  @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.shoppinglistService.ingredientEditedEmtr.subscribe((ingredient: Ingredient)=> {
      console.log("This should be edited");
      console.log("name : " + ingredient.name);
      console.log("amount : " + ingredient.amount);
    });
  }

  // onClearClick(){
  //
  // }
  //
  // onDeleteClick(){
  //
  // }

  onAddClick(){
    console.log("shopping-edit onAddClick");
    if (this.ingredientNameRef.nativeElement.value && this.ingredientAmountRef.nativeElement.value){
      // console.log(this.ingredientNameRef);
      this.shoppinglistService.onAddClick(this.ingredientNameRef.nativeElement.value, this.ingredientAmountRef.nativeElement.value);
    }
    // else {
    //   console.log("shopping-edit something missing");
    // }
  }

}
