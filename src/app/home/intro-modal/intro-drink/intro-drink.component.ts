import { Component, OnInit } from '@angular/core';
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
    public introService: IntroService
  ) { }

  ngOnInit(): void {
  }

}
