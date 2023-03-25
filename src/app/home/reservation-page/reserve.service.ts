import { ReserveInfo } from './../../model/reserveInfo';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from 'src/app/types/booking';
// httpClient 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { GlobalService } from 'src/app/service/global.service';
import { ApiUrls } from 'src/app/constants/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class ReserveService implements OnInit{
  reserveInfo = new ReserveInfo();

  restrictedDate: string = "2023-02-18";
  today: any = new Date();
  year: any = "";
  month: any = "";
  date: any = "";
  fullDate: Date = {} as Date;
  limitTime : Date = {} as Date;

  bookedTime: any;
  selectedDay!: number;
  selectedDate!: Date;
  isSunday: boolean = false;
  isDateValid: String = "valid";
  isValidForm: boolean = false;
  displayTime: string | Date = "";

  is_exec : boolean = false;
  successAlert: string = '';
  emailAlert: string = '';
  modalRef: any;

  constructor(
    private modalService: NgbModal, 
    private http: HttpClient,
    public globalService: GlobalService,
    ) {
      this.setDate();
    }

  ngOnInit(): void {
  }

  setDate(){
    this.today = new Date(Date.now());
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.date = this.today.getDate();
    this.fullDate = new Date(this.year, this.month, this.date);
    this.limitTime = new Date(this.year, this.month, this.date, 15, 0);
  }

  selectReset(){
    this.reserveInfo.course_option = null;
  }

  addTime(date : Date){
    date.setHours(this.today.getHours());
    date.setMinutes(this.today.getMinutes());
    date.setSeconds(this.today.getSeconds());
    return date;
  }

  isSpecialCourseValid(){
    if(this.reserveInfo.course == "特別コース" && new Date((this.addTime(new Date(this.reserveInfo.bookedDate)).getTime() - this.today.getTime())).getDate() <= 3) {
      this.isValidForm = false;
      return false;
    }
    this.isValidForm = true;
    return true;
  }

  getDay(){
    // initailize
    this.isSunday = false;
    this.isDateValid = "valid";
    this.today = new Date(Date.now());

    this.selectedDay = new Date(this.reserveInfo.bookedDate).getDay();
    this.selectedDate = this.addTime(new Date(this.reserveInfo.bookedDate));
    console.log(typeof this.reserveInfo.bookedDate);
    console.log(this.reserveInfo.bookedDate);
    console.log(typeof this.restrictedDate);
    console.log(this.restrictedDate);
    console.log(this.selectedDate);
    console.log(this.today);
    console.log(this.selectedDate < this.today);

    //Sunday
    if(this.selectedDay == 0) {
      this.isSunday = true;
      this.isValidForm = false;
    } else if(new Date(this.reserveInfo.bookedDate).getMonth() == this.fullDate.getMonth() && new Date(this.reserveInfo.bookedDate).getDate() == this.fullDate.getDate() && this.limitTime < this.selectedDate) {
      // Same date && after 3pm
      this.isDateValid = "limitation";
      this.isValidForm = false;
    } else if((new Date(this.reserveInfo.bookedDate).getMonth() != this.fullDate.getMonth() || new Date(this.reserveInfo.bookedDate).getDate() != this.fullDate.getDate()) && this.selectedDate < this.today){
      // passed date
      this.isDateValid = "passed";
      this.isValidForm = false;
    } else if(this.reserveInfo.bookedDate.toString() == this.restrictedDate){
      // restricted
      this.isDateValid = "unavailable";
      this.isValidForm = false;
    } else {
      // valid
      this.isSunday = false;
      this.isDateValid = "valid";
      this.isValidForm = true;
    }
  }

  getDisplay(){
    if(this.globalService.isEnglish) 
      moment.locale('en');
    else 
      moment.locale('ja');

    this.bookedTime = this.reserveInfo.bookedDate.toString() + " " + this.reserveInfo.bookedTime;
  }

  open(content: any){
    this.getDisplay();
    this.displayTime = this.reserveInfo.bookedTime;
		this.modalRef = this.modalService.open(content);
  }

  createBookedDateForDB(){
    return this.reserveInfo.bookedDate + " " + this.reserveInfo.bookedTime;
  }

  createBooking(): Observable<string>{
    this.reserveInfo.bookedTime = this.createBookedDateForDB();

    let apiUrl = `${environment.apiUrl}${ApiUrls.RESERVATION_URL}${ApiUrls.RESERVATION_ACTION_RESERVE}`;

    return this.http.post<string>(apiUrl, this.reserveInfo);
  }

  destroyForms(){
    this.reserveInfo.name = "";
    this.reserveInfo.howMany = 1;
    this.reserveInfo.bookedDate = new Date();
    this.reserveInfo.bookedTime = "";
    this.reserveInfo.course = "";
    this.reserveInfo.course_option = null;
    this.reserveInfo.description = "";
    this.reserveInfo.email = "";
    this.reserveInfo.phone_number = "";
  }
}
