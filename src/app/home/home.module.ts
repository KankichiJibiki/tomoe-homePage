import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationPageModule } from './reservation-page/reservation-page.module';
import { AppRoutingModule } from '../app-routing.module';
import { MapPageEnComponent } from './map-page/map-page-en/map-page-en.component';



@NgModule({
  declarations: [
    HomeComponent,
    MapPageComponent,
    MapPageEnComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReservationPageModule
  ],
})
export class HomeModule { }
