import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReserveService } from '../../reserve.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {
  // myInterval: any;

  constructor(
    public reserveService: ReserveService,
    public globalService : GlobalService,
    public formService : FormService
  ) { }

  ngOnInit(): void {
  }
}
