import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'a test schnitzel',
      'this is a simple test desc.',
      'https://images.unsplash.com/photo-1560611588-163f295eb145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 17)
      ]),
    new Recipe(
      'another test burger',
      'this is ANOTHER simple test desc.',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      [
        new Ingredient('buns', 1),
        new Ingredient('meat', 1),
        new Ingredient('sauce', 1),
        new Ingredient('tots', 9),
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
}