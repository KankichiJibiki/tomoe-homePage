import { SpinnerService } from './../../../service/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor(
    public spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
  }

}
