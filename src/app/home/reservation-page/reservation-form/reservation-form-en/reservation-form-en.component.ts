import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../../reserve.service';

@Component({
  selector: 'app-reservation-form-en',
  templateUrl: './reservation-form-en.component.html',
  styleUrls: ['./reservation-form-en.component.css']
})
export class ReservationFormEnComponent implements OnInit {

  constructor(
    public reserveService: ReserveService,
  ) { }

  ngOnInit(): void {
  }

}
