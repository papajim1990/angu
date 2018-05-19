import { Component, OnInit , Input } from '@angular/core';
import { Dish } from "../shared/dish";
import { Comments } from "../shared/Comments";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dishes :Dish;


  constructor() { }

  ngOnInit() {
  }

}
