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
  eidtedIngredient: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    // this.shoppinglistService.ingredientEditedEmtr.subscribe((ingredient: Ingredient)=> {
    //   console.log("This should be edited");
    //   console.log("name : " + ingredient.name);
    //   console.log("amount : " + ingredient.amount);
    // });

    this.startedEditingSubscription = this.shoppinglistService.startedEditing.subscribe((index: number) => {
      console.log("index subscription : " + index);
      this.editMode = true;
      this.editedItemIndex = index;
      this.eidtedIngredient = this.shoppinglistService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.eidtedIngredient.name,
        amount: this.eidtedIngredient.amount
      });
    });
  }

  ngOnDestroy(){
    this.startedEditingSubscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    this.shoppinglistService.onAddClick(value.name, value.amount);
  }

}
