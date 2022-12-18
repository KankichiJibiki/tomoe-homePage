import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  }

}
