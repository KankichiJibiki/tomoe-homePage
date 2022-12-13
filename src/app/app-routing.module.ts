import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MapPageComponent } from './home/map-page/map-page.component';
import { ReservationPageComponent } from './home/reservation-page/reservation-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mapPage', component: MapPageComponent},
  {path: 'reservation', component: ReservationPageComponent},
  // {path: 'adminPage', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50],
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
