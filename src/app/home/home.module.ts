import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationPageModule } from './reservation-page/reservation-page.module';
import { AppRoutingModule } from '../app-routing.module';
import { MapPageEnComponent } from './map-page/map-page-en/map-page-en.component';
import { IntroModalComponent } from './intro-modal/intro-modal.component';
import { IntroMealComponent } from './intro-modal/intro-meal/intro-meal.component';
import { IntroDrinkComponent } from './intro-modal/intro-drink/intro-drink.component';
import { IntroPlateComponent } from './intro-modal/intro-plate/intro-plate.component';
import { IntroInnerComponent } from './intro-modal/intro-inner/intro-inner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeEnComponent } from './home-en/home-en.component';
import { DishpageComponent } from './dishpage/dishpage.component';
import { BaseInfoComponent } from './common/base-info/base-info.component';
import { DishpageEnComponent } from './dishpage/dishpage-en/dishpage-en.component';
import { DrinkPageComponent } from './drink-page/drink-page.component';
import { DrinkPageEnComponent } from './drink-page/drink-page-en/drink-page-en.component'; 




@NgModule({
  declarations: [
    HomeComponent,
    MapPageComponent,
    MapPageEnComponent,
    IntroModalComponent,
    IntroMealComponent,
    IntroDrinkComponent,
    IntroPlateComponent,
    IntroInnerComponent,
    DiaryPageComponent,
    HomeEnComponent,
    DishpageComponent,
    BaseInfoComponent,
    DishpageEnComponent,
    DrinkPageComponent,
    DrinkPageEnComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReservationPageModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
  ],
})
export class HomeModule { }
