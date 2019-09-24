import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) inputName: ElementRef;
  @ViewChild('amountInput', {static:false}) inputAmount: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){

    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;

    const newIngredient = new Ingredient(name, amount);
    
    this.ingredientAdded.emit(newIngredient);

  }

}
