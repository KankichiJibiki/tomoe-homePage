import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReserveService } from '../../reserve.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {
  // myInterval: any;

  constructor(
    public reserveService: ReserveService,
    public globalService : GlobalService,
    public formService : FormService
    // private router: Router,
    // public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  
  // onSubmit(){
  //   console.log("onSubmit");
  //   this.reserveService.createBooking().subscribe(
  //     res => {
  //       this.reserveService.successAlert = res.message;

  //       //email if success
  //       this.submitEmail();

  //       this.myInterval = setInterval(() => {
  //         window.location.reload();
  //         this.myInterval.clearInterval();
  //       }, 2500)
  //     },
  //     error => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // submitEmail(){
  //   this.reserveService.submitEmail().subscribe(
  //     res => {
  //       alert('Email Successfully sent');
  //     },
  //     error => {
  //       this.reserveService.emailAlert = error.message;
  //       alert(error.message);
  //     }
  //   )
  // }


  // close(){
  //   this.modalService.dismissAll();
  // }
}
