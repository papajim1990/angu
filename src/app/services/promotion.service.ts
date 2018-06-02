import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promise<Promotion[]>{
    return Promise.resolve(PROMOTION);
    }
    getDish(id : number): Promise<Promotion>{
      return Promise.resolve(PROMOTION.filter((prmotion) => (prmotion.id === id))[0]);
      }
      getFeaturedPromotion(): Promise<Promotion[]>{
        return Promise.resolve(PROMOTION.filter((promotion) => (promotion.feautured === true)));
        }
}
