import { FormService } from './../../../service/form/form.service';
import { GlobalService } from './../../../service/global/global.service';
import { SpinnerService } from './../../../service/spinner/spinner.service';
import { ReserveService } from './../../../service/reserve/reserve.service';
import { Component, OnInit } from '@angular/core';

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
