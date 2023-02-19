import { GlobalService } from './../../service/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.css']
})
export class DrinkPageComponent implements OnInit {
  color: string = "black";

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
