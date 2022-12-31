import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { IntroService } from '../intro.service';

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
