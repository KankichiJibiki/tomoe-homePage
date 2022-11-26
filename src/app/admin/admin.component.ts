import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../home/reservation-page/reserve.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  reservations: any;
  confirm: boolean = false;

  constructor(
    public reserveService: ReserveService
    ) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(){
    this.reserveService.getReservations().subscribe(
      (res:any)=>{
        console.log(res);
        this.reservations = res.data;
      }
    )
  }

  deleteRecord(reservation: any){
    this.confirm = confirm('予約レコードが削除されますがよろしいですね？？？？？？？？');
    if(!this.confirm) return;

    return this.reserveService.delete(reservation.id).subscribe(
      (data: any) => {
        this.getReservations();
      },
      error => {
        alert(error.message);
      }
    )
  }

}
