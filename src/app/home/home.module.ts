import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationPageModule } from './reservation-page/reservation-page.module';



@NgModule({
  declarations: [
    HomeComponent,
    MapPageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    ReservationPageModule
  ],
})
export class HomeModule { }
