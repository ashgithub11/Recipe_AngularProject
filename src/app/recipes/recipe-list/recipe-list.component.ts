import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test recipe', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/olive_GingerCake-3ac15be.jpg?webp=true&quality=90&resize=960%2C408'),
    new Recipe('Another test Recipe', 'This is simply a test recipe', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/olive_GingerCake-3ac15be.jpg?webp=true&quality=90&resize=960%2C408')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
