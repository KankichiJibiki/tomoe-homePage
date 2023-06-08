import { GlobalService } from './../../../../service/global/global.service';
import { ReserveService } from './../../../../service/reserve/reserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-page-en',
  templateUrl: './reservation-page-en.component.html',
  styleUrls: [
    './reservation-page-en.component.css',
    '../reservation-page.component.css',
  ]
})
export class ReservationPageEnComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor(
    public reserveService: ReserveService,
    public globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
