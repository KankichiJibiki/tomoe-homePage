import { ReserveService } from './../../../../service/reserve/reserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form-en',
  templateUrl: './reservation-form-en.component.html',
  styleUrls: ['.././reservation-form.component.css']
})
export class ReservationFormEnComponent implements OnInit {

  constructor(
    public reserveService: ReserveService,
  ) { }

  ngOnInit(): void {
  }

}
