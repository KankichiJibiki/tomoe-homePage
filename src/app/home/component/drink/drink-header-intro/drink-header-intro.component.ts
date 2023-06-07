import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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
