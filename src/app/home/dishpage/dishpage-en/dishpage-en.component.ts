import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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
