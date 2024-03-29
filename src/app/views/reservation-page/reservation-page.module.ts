import { ReservationModalEnComponent } from './modal/reservation-modal-en/reservation-modal-en.component';
import { ReservationFormEnComponent } from './form/reservation-form-en/reservation-form-en.component';
import { ReservationPageEnComponent } from './main/reservation-page-en/reservation-page-en.component';
import { ReservationModalComponent } from './modal/reservation-modal.component';
import { ReservationFormComponent } from './form/reservation-form.component';
import { ReservationPageComponent } from './main/reservation-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { SharedModule } from '../common/shared/shared.module';
import { ReservationPageRoutingModule } from './reservation-page-routing.module';



@NgModule({
  declarations: [
    ReservationPageComponent,
    ReservationFormComponent,
    ReservationModalComponent,
    ReservationPageEnComponent,
    ReservationFormEnComponent,
    ReservationModalEnComponent,
  ],
  imports: [
    CommonModule,
    ReservationPageRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FlatpickrModule,
    MatProgressSpinnerModule,
    SharedModule,
  ]
})
export class ReservationPageModule { }
