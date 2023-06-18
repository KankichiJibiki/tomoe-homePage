import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationPageComponent } from './main/reservation-page.component';

const routes: Routes = [
  {
    path: '', 
    component: ReservationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationPageRoutingModule { }
