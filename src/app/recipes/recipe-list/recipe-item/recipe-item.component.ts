import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Input allows to bind component from outside
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {
  }

}
