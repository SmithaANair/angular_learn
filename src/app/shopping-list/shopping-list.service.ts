import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    ingredientChanged = new EventEmitter<Ingredient[]>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(newIngredients: Ingredient[]) {
       /*  newIngredients.forEach(newIngredient => {
            this.addIngredient(newIngredient);
        }); */
        this.ingredients.push(...newIngredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}