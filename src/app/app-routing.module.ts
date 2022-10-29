import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapPageComponent } from './home/map-page/map-page.component';
import { ReservationPageComponent } from './home/reservation-page/reservation-page.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: MapPageComponent},
  {path: 'mapPage', component: MapPageComponent},
  {path: 'reservation', component: ReservationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
