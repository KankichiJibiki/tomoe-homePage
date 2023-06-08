import { GlobalService } from './../../../../service/global/global.service';
import { IntroService } from './../../../../service/introduction/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-inner',
  templateUrl: './intro-inner.component.html',
  styleUrls: [
    './intro-inner.component.css',
    '../intro-modal.component.css'
  ]
})
export class IntroInnerComponent implements OnInit {

  constructor(
    public introService: IntroService,
    public globalService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
