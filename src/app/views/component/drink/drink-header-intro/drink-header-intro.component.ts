import { GlobalService } from './../../../../service/global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-header-intro',
  templateUrl: './drink-header-intro.component.html',
  styleUrls: ['./drink-header-intro.component.css']
})
export class DrinkHeaderIntroComponent implements OnInit {

  constructor(
    public gService: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
