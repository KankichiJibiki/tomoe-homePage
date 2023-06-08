import { GlobalService } from './../../../service/global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-page-en',
  templateUrl: './map-page-en.component.html',
  styleUrls: [
    './map-page-en.component.css',
    '../map-page.component.css'
  ]
})
export class MapPageEnComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
