import { Injectable, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from 'src/app/types/booking';
// httpClient 
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map;'

@Injectable({
  providedIn: 'root'
})
export class ReserveService implements OnInit{
  today: any = new Date();
  selectedDay!: number;
  isDateValid: boolean = true;
  is_exec : boolean = false;

  //For ajax
    private base_url: string = 'http://localhost/tomoe_db_restapi/';
  //

  // bookingInfo: Booking = {
  //   name : '',
  //   howMany : 0,
  //   bookedDate : {} as Date,
  //   bookedTime : "17:00",
  //   course : '',
  //   email : '',
  //   phone : '',
  // }
  bookingInfo: Booking = {
    name : 'test',
    howMany : 2,
    bookedDate : {} as Date,
    bookedTime : "17:00",
    course : '巴コース',
    email : 'test@gmail.com',
    phone : '13218546896',
  }


  constructor(
    private modalService: NgbModal, 
    private activeModal: NgbActiveModal, 
    private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  getDay(){
    console.log(typeof this.bookingInfo.bookedDate)
    this.selectedDay = new Date(this.bookingInfo.bookedDate).getDay();
    console.log(this.selectedDay);
    if(this.selectedDay == 0) this.isDateValid = false;
    else this.isDateValid = true;
  }

  open(content: any){
		this.modalService.open(content);
		// modalRef.componentInstance.name = 'World';
  }

  close(){
    alert('close modal');
    this.activeModal.dismiss('Cross click');
  }

  createBooking(){
    const headers = new HttpHeaders({'myHeader': 'tomoe'});
    return this.http.post<any>(this.base_url+'insert.php', this.bookingInfo, {'headers': headers});
  }

  getReservations(){
    return this.http.get<Booking[]>(this.base_url+"view.php");
  }
}
