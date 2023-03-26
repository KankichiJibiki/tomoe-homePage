import { SpinnerService } from './../../../../service/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../../reserve.service';
import { GlobalService } from 'src/app/service/global.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {
  // myInterval: any;

  constructor(
    public reserveService: ReserveService,
    public spinnerService: SpinnerService,
    public globalService : GlobalService,
    public formService : FormService
  ) { }

  ngOnInit(): void {
  }
}
