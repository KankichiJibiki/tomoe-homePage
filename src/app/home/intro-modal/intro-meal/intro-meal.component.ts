import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { IntroService } from '../intro.service';

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
