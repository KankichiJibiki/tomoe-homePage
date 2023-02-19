import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

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
