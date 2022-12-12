import { Component, Input, OnInit } from '@angular/core';
import { ReserveService } from '../reserve.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { FlatpickrOptions } from 'ng2-flatpickr/src/flatpickr-options.interface';
import Japanese from 'flatpickr/dist/l10n/ja.js';
import flatpickr from 'flatpickr';


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
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

}
