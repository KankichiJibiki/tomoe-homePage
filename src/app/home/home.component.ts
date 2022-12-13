import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
