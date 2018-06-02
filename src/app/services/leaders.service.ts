import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Leaders } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getPromotions():  Promise<Leader[]>{
    return Promise.resolve(Leaders);
    }
    getDish(id : number):  Promise<Leader>{
      return Promise.resolve(Leaders.filter((Leader) => (Leader.id === id))[0]);
      }
      getFeaturedPromotion():  Promise<Leader[]>{
        return Promise.resolve(Leaders.filter((Leader) => (Leader.featured === true)));
        }
}
