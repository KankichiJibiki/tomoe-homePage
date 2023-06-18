import { ReservationPageModule } from './../reservation-page/reservation-page.module';
import { AppRoutingModule } from './../../app-routing.module';
import { HeaderIntroComponent } from './../component/home/header-intro/header-intro.component';
import { OverlayComponent } from './../common/overlay/overlay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroModalComponent } from './intro-modal/intro-modal.component';
import { IntroMealComponent } from './intro-modal/intro-meal/intro-meal.component';
import { IntroDrinkComponent } from './intro-modal/intro-drink/intro-drink.component';
import { IntroPlateComponent } from './intro-modal/intro-plate/intro-plate.component';
import { IntroInnerComponent } from './intro-modal/intro-inner/intro-inner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeEnComponent } from './home-en/home-en.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../common/shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    HomeEnComponent,
    IntroModalComponent,
    IntroMealComponent,
    IntroDrinkComponent,
    IntroPlateComponent,
    IntroInnerComponent,
    DiaryPageComponent,
    OverlayComponent,
    HeaderIntroComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReservationPageModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
})
export class HomeModule { }
