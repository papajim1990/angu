import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Leaders } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getPromotions(): Leader[]{
    return Leaders;
    }
    getDish(id : number): Leader{
      return Leaders.filter((Leader) => (Leader.id === id))[0];
      }
      getFeaturedPromotion(): Leader[]{
        return Leaders.filter((Leader) => (Leader.featured === true));
        }
}
