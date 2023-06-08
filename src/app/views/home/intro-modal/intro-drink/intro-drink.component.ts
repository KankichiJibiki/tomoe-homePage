import { GlobalService } from './../../../../service/global/global.service';
import { IntroService } from './../../../../service/introduction/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-drink',
  templateUrl: './intro-drink.component.html',
  styleUrls: [
    './intro-drink.component.css',
    '../intro-modal.component.css'
]
})
export class IntroDrinkComponent implements OnInit {

  constructor(
    public introService: IntroService,
    public globalService: GlobalService,
  ) {
  }

  ngOnInit(): void {
  }

}
