import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingService: ShoppingService) { }
    private recipes: Recipe[] = [
        new Recipe('Bhelpuri',
            'Bhelpuri is a savoury snack, originating from the Indian subcontinent, and is also a type of chaat.',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Indian_cuisine-Chaat-Bhelpuri-03.jpg/250px-Indian_cuisine-Chaat-Bhelpuri-03.jpg',
            [new Ingredient('Puri', 5),
            new Ingredient('Tomatoes', 10),
            new Ingredient('Peanuts', 20)]
        ),
        new Recipe('Puttu',
            'Puttu is a breakfast dish originating from the Indian state of Kerala',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rice_Puttu_with_Gram_Curry.jpg/220px-Rice_Puttu_with_Gram_Curry.jpg',
            [new Ingredient('Rice flour', 5),
            new Ingredient('Kadala', 10),
            new Ingredient('Coconut', 20)]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();//copy of array will be returned
    }


    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}