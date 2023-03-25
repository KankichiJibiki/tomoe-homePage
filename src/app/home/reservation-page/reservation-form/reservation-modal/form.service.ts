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
    this.reserveService.createBooking().subscribe({
      next: (res: any) => {
        this.reserveService.successAlert = res.message;
        console.log(res);

        this.myInterval = setInterval(() => {
          window.location.reload();
          this.myInterval.clearInterval();
        }, 2500)
      },
      error: (error: any) => {
        console.log(error);
        alert(error.message);
      },
    });
  }

  close(){
    this.modalService.dismissAll();
  }
}
