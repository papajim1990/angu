import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";
import { Comments } from "../shared/Comments";
import{Params,ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
 // @Input()
  dishes :Dish;


  constructor(private dishService:DishService,private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    this.dishService.getDish(id).subscribe(dishes=>this.dishes = dishes);
  }
  goBack():void{
    this.location.back();
  }

}
