import { ReserveService } from './../../../service/reserve/reserve.service';
import { GlobalService } from './../../../service/global/global.service';
import { Component, Input, OnInit } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr/src/flatpickr-options.interface';
import Japanese from 'flatpickr/dist/l10n/ja.js';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  @Input() isCollapsed: boolean = {} as boolean;
  reservations: any;

  options: FlatpickrOptions = {
    locale: Japanese,
    minDate: this.reserveService.fullDate,
  }

  constructor(
    public reserveService: ReserveService,
    public globalService: GlobalService,
    ) { 
    }

  ngOnInit(): void {
  }

}
