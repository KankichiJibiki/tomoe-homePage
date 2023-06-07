import { RestrictedDates } from './../../model/restrictedDates';
import { ReserveInfo } from './../../model/reserveInfo';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { Injectable, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// httpClient 
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { GlobalService } from 'src/app/service/global.service';
import { ApiUrls } from 'src/app/constants/ApiUrls';

@Injectable({
  providedIn: 'root'
})
export class ReserveService implements OnInit{
  reserveInfo = new ReserveInfo();

  restrictedDates: RestrictedDates[] = [];
  today: any = new Date();
  year: any = "";
  month: any = "";
  date: any = "";
  fullDate: Date = {} as Date;
  limitTime : Date = {} as Date;
  isFormDisabled : boolean = true;

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
      this.getRestrictedDates();
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
    } else if(this.restrictedDates.find(rd => rd == this.reserveInfo.bookedDate)){
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

  getRestrictedDates()
  {
    this._executeRestrictedDates().subscribe({
      next: (res: any) => {
        this.restrictedDates = res.data;
      },
      complete: () => {
        this.isFormDisabled = false;
      }
    });
  }

  private _executeRestrictedDates(): Observable<any>{
    let apiUrl = `${environment.apiUrl}${ApiUrls.RESERVATION_URL}${ApiUrls.RESERVATION_ACTION_RESTRICTED}`;
    return this.http.get<any>(apiUrl);
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
