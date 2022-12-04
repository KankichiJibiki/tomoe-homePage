import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
