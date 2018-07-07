import {Ingredient} from "./ingredient";

export class Beverage {
    beverageName:string;
    ingredients: Array<Ingredient> = new Array();
    
    constructor(bevName:string) {
        this.beverageName = bevName;
    }
    
    addIngredient( ingredient:Ingredient) {
        this.ingredients.push(ingredient);
    }
    
    getIngredients() {
        return this.ingredients;
    }
}
