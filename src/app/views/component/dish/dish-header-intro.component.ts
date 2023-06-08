import { GlobalService } from './../../../service/global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-header-intro',
  templateUrl: './dish-header-intro.component.html',
  styleUrls: ['./dish-header-intro.component.css']
})
export class DishHeaderIntroComponent implements OnInit {

  constructor(
    public gService : GlobalService
  ) { }

  ngOnInit(): void {
  }

}
