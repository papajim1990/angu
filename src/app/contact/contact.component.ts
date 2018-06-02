import { Component, OnInit } from '@angular/core';
import {LeadersService} from "../services/leaders.service";
import {Leader} from "../shared/leader";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  leader : Leader[];
  constructor(private leaderService:LeadersService) { }

  ngOnInit() {
    this.leaderService.getPromotions().then(leader=>this.leader=leader);
  }

}
