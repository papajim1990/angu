import { Injectable } from '@angular/core';
import {Dish} from "../shared/dish";
import {dishess} from "../shared/dishes";
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Dish[]{
  return dishess;
  }
  getDish(id : number): Dish{
    return dishess.filter((dish) => (dish.id === id))[0];
    }
    getFeaturedDish(): Dish[]{
      return dishess.filter((dish) => (dish.feautured === true));
      }
}
