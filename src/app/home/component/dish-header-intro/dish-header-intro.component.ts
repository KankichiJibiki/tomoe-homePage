import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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
