import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppinglistService} from "../service/shoppinglist.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @Output() ingredientAddEmitter = new EventEmitter<Ingredient>();
  // @ViewChild('ingredientName') ingredientNameRef: ElementRef;
  // @ViewChild('ingredientAmount') ingredientAmountRef: ElementRef;

  startedEditingSubscription: Subscription = new Subscription();
  editMode: boolean = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppinglistService.startedEditing.subscribe((index: number) => {
      console.log("index subscription : " + index);
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedIngredient = this.shoppinglistService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      });
    });
  }

  ngOnDestroy(){
    this.startedEditingSubscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    if (this.editMode){
      this.shoppinglistService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    } else {
      this.shoppinglistService.onAddClick(value.name, value.amount);
    }
    this.editMode = false;
    form.reset();
  }

  onClearClick(){
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDeleteClick() {
    console.log("editedItemIndex ", this.editedItemIndex);
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClearClick()
  }
}
