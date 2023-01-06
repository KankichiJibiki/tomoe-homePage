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
  imageBackGround: any;
  imagePath: string = '../../assets/images/';

  constructor(
    public globalService: GlobalService, 
    public reserveService: ReserveService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    moment.locale('ja');
    this.imageBackGround = document.getElementById('header_map');
    this.globalService.startGoCircleImages(this.imageBackGround, this.imagePath, false);
  }

  ngOnDestroy(): void {
    this.reserveService.destroyForms();
  }


}
