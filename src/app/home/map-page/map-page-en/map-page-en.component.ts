import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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
