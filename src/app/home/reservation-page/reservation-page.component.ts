import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { ReserveService } from './reserve.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {
  isCollapsed: boolean = true;
  reservations: any;

  constructor(
    public globalService: GlobalService, 
    public reserveService: ReserveService,
    private route: Router) { }

  ngOnInit(): void {
    this.reserveService.getReservations().subscribe(
      (data:any)=>{
        console.log(data);
        this.reservations = data.data;
      }
    )
  }

}
