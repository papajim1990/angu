import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatToolbarModule, MatCheckboxModule,MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {PromotionService} from "./services/promotion.service";
import {LeadersService} from "./services/leaders.service";
import {DishService} from "./services/dish.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import "hammerjs";
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
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
    MatCardModule,MatListModule,MatInputModule,MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSlideToggleModule,MatSelectModule
  ],
  providers: [DishService,PromotionService,LeadersService],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
