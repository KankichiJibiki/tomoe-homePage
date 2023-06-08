import { GlobalService } from './../../../service/global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishpage-en',
  templateUrl: './dishpage-en.component.html',
  styleUrls: ['../dishpage.component.css']
})
export class DishpageEnComponent implements OnInit {

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
