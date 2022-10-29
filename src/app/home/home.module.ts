import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    MapPageComponent,
    ReservationPageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
})
export class HomeModule { }
