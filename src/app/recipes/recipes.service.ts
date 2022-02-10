import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'schnitzel',
            title: 'Schnitzel',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1200px-Schnitzel.JPG',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'spaghetti',
            title: 'Spaghetti',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ];

    constructor() { }

    getAllRecipes(): Recipe[] {
        return [...this.recipes];
    }

    getRecipe(recipeId: string): Recipe {
        return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
    }

    deleteRecipe(recipeId: string): Observable<boolean> {
        this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
        return of(true);
    }
}
