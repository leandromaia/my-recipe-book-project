import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            'Bolo de Cenoura',
            'Este bolo de cenoura é top, ainda mais com chocolate',
            'https://melepimenta.com/wp-content/uploads/2018/01/Bolo-de-cenoura-de-liquidificador-Baixa-2-1024x683.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Bolo de Mandioca',
            'Comer bolo de mandioca com café é muito bom!!!',
            'https://t2.rg.ltmcdn.com/pt/images/1/2/0/bolo_de_mandioca_cremoso_6021_paso_6_600.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
