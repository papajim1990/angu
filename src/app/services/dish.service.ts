import { Injectable } from '@angular/core';
import {Dish} from "../shared/dish";
import {dishess} from "../shared/dishes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/delay";
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Observable<Dish[]>{
  return Observable.of(dishess).delay(2000);
    

  }
  getDish(id : number): Observable<Dish>{
    return Observable.of(dishess.filter((dish) => (dish.id === id))[0]).delay(2000);
    }
    getFeaturedDish(): Observable<Dish[]>{
      return Observable.of(dishess.filter((dish) => (dish.feautured === true))).delay(2000);
      }
}
