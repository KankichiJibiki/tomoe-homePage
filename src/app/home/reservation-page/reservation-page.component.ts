import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { ReserveService } from './reserve.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit, OnDestroy{
  isCollapsed: boolean = true;

  constructor(
    public globalService: GlobalService, 
    public reserveService: ReserveService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    moment.locale('ja');
    console.log(moment().format('dddd'));
  }

  ngOnDestroy(): void {
    this.reserveService.destroyForms();
  }


}
