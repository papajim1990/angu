import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import {DishService} from "../services/dish.service";

import { Promotion } from "../shared/promotion";
import {PromotionService} from "../services/promotion.service";
import { Leader } from "../shared/leader";
import {LeadersService} from "../services/leaders.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Promotions :Promotion[];
  dishes :Dish[];
  leaders :Leader[];
  constructor(private promotionService:PromotionService, private dishService:DishService,private leaderService:LeadersService) { }

  ngOnInit() {
  this.Promotions=this.promotionService.getFeaturedPromotion();
  this.dishes=this.dishService.getFeaturedDish();
  this.leaders=this.leaderService.getFeaturedPromotion();
  }

}
