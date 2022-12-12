import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationPageComponent } from './reservation-page.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { GlobalService } from 'src/app/service/global.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationModalComponent } from './reservation-form/reservation-modal/reservation-modal.component';
import { ReservationPageEnComponent } from './reservation-page-en/reservation-page-en.component';
import { ReservationFormEnComponent } from './reservation-form/reservation-form-en/reservation-form-en.component';
import { ReservationModalEnComponent } from './reservation-form/reservation-modal/reservation-modal-en/reservation-modal-en.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';



@NgModule({
  declarations: [
    ReservationPageComponent,
    ReservationFormComponent,
    ReservationModalComponent,
    ReservationPageEnComponent,
    ReservationFormEnComponent,
    ReservationModalEnComponent,
  ],
  providers:[
    GlobalService,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FlatpickrModule
  ]
})
export class ReservationPageModule { }
