import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import {rtes} from "./routes";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rtes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
