import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';
import { ReserveService } from '../../reserve.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myInterval: any;

  constructor(
    public reserveService: ReserveService,
    public globalService : GlobalService,
    public modalService: NgbModal,
  ) { }
  
  onSubmit(){
    console.log("onSubmit");
    this.reserveService.createBooking().subscribe(
      res => {
        this.reserveService.successAlert = res.message;

        //email if success
        this.submitEmail();

        this.myInterval = setInterval(() => {
          window.location.reload();
          this.myInterval.clearInterval();
        }, 2500)
      },
      error => {
        alert(error.message);
      }
    );
  }

  submitEmail(){
    this.reserveService.submitEmail().subscribe(
      res => {
        alert('Email Successfully sent');
      },
      error => {
        this.reserveService.emailAlert = error.message;
        alert(error.message);
      }
    )
  }


  close(){
    this.modalService.dismissAll();
  }
}
