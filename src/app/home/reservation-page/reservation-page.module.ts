import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationPageComponent } from './reservation-page.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { GlobalService } from 'src/app/service/global.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationModalComponent } from './reservation-form/reservation-modal/reservation-modal.component';



@NgModule({
  declarations: [
    ReservationPageComponent,
    ReservationFormComponent,
    ReservationModalComponent,
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
  ]
})
export class ReservationPageModule { }
