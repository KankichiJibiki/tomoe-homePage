import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../../../reserve.service';
import { FormService } from '../form.service';

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
