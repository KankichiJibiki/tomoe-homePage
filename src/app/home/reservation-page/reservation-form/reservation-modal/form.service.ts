import { OverlayService } from './../../../../service/overlay/overlay.service';
import { SpinnerService } from './../../../../service/spinner/spinner.service';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';
import { ReserveService } from '../../reserve.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myInterval: any;
  isDisabled: boolean = false;

  constructor(
    public reserveService: ReserveService,
    public spinnerService: SpinnerService,
    public globalService : GlobalService,
    public modalService: NgbModal,
    public overlayService: OverlayService,
  ) { }
  
  onSubmit(){
    this.isDisabled = true;
    this.overlayService.createOverlay();
    this.spinnerService.start();

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
      complete: () => {
        this.isDisabled = false;
        this.spinnerService.stop();
        this.overlayService.disposeOverlay();
      }
    });
  }

  close(){
    this.modalService.dismissAll();
  }
}
