import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { IntroService } from '../intro.service';

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
