import { GlobalService } from './../../../../service/global/global.service';
import { IntroService } from './../../../../service/introduction/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-plate',
  templateUrl: './intro-plate.component.html',
  styleUrls: [
    './intro-plate.component.css',
    '../intro-modal.component.css'
  ]
})
export class IntroPlateComponent implements OnInit {

  constructor(
    public introService: IntroService,
    public globalService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
