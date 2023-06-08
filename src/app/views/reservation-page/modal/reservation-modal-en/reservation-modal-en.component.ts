import { FormService } from './../../../../service/form/form.service';
import { ReserveService } from './../../../../service/reserve/reserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-modal-en',
  templateUrl: './reservation-modal-en.component.html',
  styleUrls: ['./reservation-modal-en.component.css']
})
export class ReservationModalEnComponent implements OnInit {

  constructor(
    public reserveService: ReserveService,
    public formService: FormService
  ) { }

  ngOnInit(): void {
  }

}
