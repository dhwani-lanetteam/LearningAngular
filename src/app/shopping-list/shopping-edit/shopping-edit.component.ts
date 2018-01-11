import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAddEmitter = new EventEmitter<Ingredient>();
  @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClearClick(){

  }

  onDeleteClick(){

  }

  onAddClick(){
    if (this.ingredientNameRef.nativeElement.value && this.ingredientAmountRef.nativeElement.value){
      // console.log(this.ingredientNameRef);
      this.ingredientAddEmitter.emit(new Ingredient((this.ingredientNameRef.nativeElement.value).toLowerCase(), parseInt(this.ingredientAmountRef.nativeElement.value)));
    }
  }

}
