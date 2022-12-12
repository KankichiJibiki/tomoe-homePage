import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from 'src/app/types/booking';
// httpClient 
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { GlobalService } from 'src/app/service/global.service';


@Injectable({
  providedIn: 'root'
})
export class ReserveService implements OnInit{
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

  is_exec : boolean = false;
  successAlert: string = '';
  emailAlert: string = '';
  modalRef: any;

  //For ajax
    private base_url: string = 'http://tomoereservation-env.eba-9z6xx2ex.ap-northeast-1.elasticbeanstalk.com/tomoe_db_restapi_prod/';
  //

  bookingInfo: Booking = {
    name : "",
    howMany : null,
    bookedDate : {} as Date,
    bookedTime : "",
    course : "",
    course_option : null,
    discription : "",
    email : "",
    phone : "",
    dateForDisplay : "",
    timeForDisplay : "",
  }


  constructor(
    private modalService: NgbModal, 
    private http: HttpClient,
    public globalService: GlobalService
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
    this.bookingInfo.course_option = null;
  }

  addTime(date : Date){
    date.setHours(this.today.getHours());
    date.setMinutes(this.today.getMinutes());
    date.setSeconds(this.today.getSeconds());
    return date;
  }

  isSpecialCourseValid(){
    if(this.bookingInfo.course == "特別コース" && new Date((this.addTime(new Date(this.bookingInfo.bookedDate)).getTime() - this.today.getTime())).getDate() <= 3) {
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

    this.selectedDay = new Date(this.bookingInfo.bookedDate).getDay();
    this.selectedDate = this.addTime(new Date(this.bookingInfo.bookedDate));

    //Sunday
    if(this.selectedDay == 0) {
      this.isSunday = true;
      this.isValidForm = false;
    } else if(new Date(this.bookingInfo.bookedDate).getMonth() == this.fullDate.getMonth() && new Date(this.bookingInfo.bookedDate).getDate() == this.fullDate.getDate() && this.limitTime < this.selectedDate) {
      // Same date && after 3pm
      this.isDateValid = "limitation";
      this.isValidForm = false;
    } else if(new Date(this.bookingInfo.bookedDate).getMonth() != this.fullDate.getMonth() || new Date(this.bookingInfo.bookedDate).getDate() != this.fullDate.getDate() && this.selectedDate < this.today){
      // passed date
      this.isDateValid = "passed";
      this.isValidForm = false;
    } else {
      // valid
      this.isSunday = false;
      this.isDateValid = "valid";
      this.isValidForm = true;
    }
  }

  getDisplay(){
    if(this.globalService.isEnglish) moment.locale('en');
    else moment.locale('ja');

    this.bookedTime = this.bookingInfo.bookedDate.toString() + " " + this.bookingInfo.bookedTime;
    this.bookingInfo.dateForDisplay = moment(this.bookedTime).format('MMM Do');
    this.bookingInfo.timeForDisplay = moment(this.bookedTime).format('LT');
  }

  open(content: any){
    this.getDisplay();
		this.modalRef = this.modalService.open(content);
  }

  createBookedDateForDB(){
    return this.bookingInfo.bookedDate + " " + this.bookingInfo.bookedTime;
  }

  createBooking(){
    this.bookingInfo.bookedTime = this.createBookedDateForDB();

    return this.http.post<any>(this.base_url+"insert.php", JSON.stringify(this.bookingInfo));
  }

  getReservations(){
    return this.http.get<Booking[]>(this.base_url+"view.php");
  }

  delete(id: any){
    return this.http.delete(this.base_url + "delete.php?id=" + id);
  }

  submitEmail(){
    return this.http.post<any>(this.base_url + "submitEmail.php", JSON.stringify(this.bookingInfo), { responseType: 'text' as 'json' });
  }

  destroyForms(){
    this.bookingInfo.name = "";
    this.bookingInfo.howMany = null;
    this.bookingInfo.bookedDate = {} as Date;
    this.bookingInfo.bookedTime = "";
    this.bookingInfo.course = "";
    this.bookingInfo.course_option = null;
    this.bookingInfo.discription = "";
    this.bookingInfo.email = "";
    this.bookingInfo.phone = "";
    this.bookingInfo.dateForDisplay = "";
    this.bookingInfo.timeForDisplay = "";
  }
}
