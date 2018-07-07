import { Injectable } from '@angular/core';
import {Beverage} from '../model/Beverage';
import {Ingredient} from "../model/ingredient";

@Injectable({
  providedIn: 'root'
})
export class BeverageServiceService {

  beverages: Array<Beverage> = new Array();

  constructor() {
    var coffee = new Beverage('Coffee');
    var coffeeIng = new Ingredient("Coffee",3);
    var sugarIng = new Ingredient("Sugar",1);
    var creamIng = new Ingredient("Cream",3);
    coffee.addIngredient(coffeeIng);
    coffee.addIngredient(sugarIng);
    coffee.addIngredient(creamIng);
    this.beverages.push(coffee);

    var cafeLatte = new Beverage('Cafe Latte');
    var expresso = new Ingredient('Expresso',2);
    var steamedMilk = new Ingredient('Steam Milk',1);
    cafeLatte.addIngredient(expresso);
    cafeLatte.addIngredient(steamedMilk);
    this.beverages.push(cafeLatte);
    

  }

  getBeverages() {
    return this.beverages;
  }

  dispenseBeverage(beverageName:string) {
    return true;
  }

}
