import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatToolbarModule, MatCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {DishService} from "./services/dish.service";
import "hammerjs";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,MatListModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
