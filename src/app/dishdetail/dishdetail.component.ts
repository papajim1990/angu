import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import { Comments } from "../shared/Comments";
import{Params,ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";
import "rxjs/operator/switchMap";
import "rxjs/add/operator/switchMap";
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
 // @Input()
  dishes :Dish;
  dishids:number[];
  prev:number;
  next:number;

  constructor(private dishService:DishService,private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(dishids=>this.dishids=dishids);
    this.route.params.switchMap((params: Params )=> this.dishService.getDish(+params["id"])).subscribe(dishes=>{this.dishes = dishes; this.setPrevNext(dishes.id)});
  }
  goBack():void{
    this.location.back();
  }
  setPrevNext(dishid:number){
  let index= this.dishids.indexOf(dishid);
  this.prev= this.dishids[(this.dishids.length+index-1)%this.dishids.length];
  this.next= this.dishids[(this.dishids.length+index+1)%this.dishids.length];
   this.dishService.getDish(dishid).subscribe(dish=>this.dishes =dish);
}
}
