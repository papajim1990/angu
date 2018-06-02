import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promotion[]{
    return PROMOTION;
    }
    getDish(id : number): Promotion{
      return PROMOTION.filter((prmotion) => (prmotion.id === id))[0];
      }
      getFeaturedPromotion(): Promotion[]{
        return PROMOTION.filter((promotion) => (promotion.feautured === true));
        }
}
