import { GlobalService } from './../../../../service/global/global.service';
import { IntroService } from './../../../../service/introduction/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-meal',
  templateUrl: './intro-meal.component.html',
  styleUrls: [
    './intro-meal.component.css',
    '../intro-modal.component.css',
  ]
})
export class IntroMealComponent implements OnInit {

  constructor(
    public introService: IntroService,
    public globalService: GlobalService,
  ) { }

  ngOnInit(): void {
  }

}
