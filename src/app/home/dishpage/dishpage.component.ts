import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-dishpage',
  templateUrl: './dishpage.component.html',
  styleUrls: ['./dishpage.component.css']
})
export class DishpageComponent implements OnInit {

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
