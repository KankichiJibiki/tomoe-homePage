import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReserveService } from '../../reserve.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/types/booking';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {
  // newBooking: Observable<any>;

  constructor(
    public reserveService: ReserveService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log("onSubmit");
    this.reserveService.createBooking().subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/reservation']);
      });
  }
}
