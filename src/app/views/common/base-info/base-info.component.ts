import { GlobalService } from './../../../service/global/global.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {
  @Input() backColor: string = "";

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
