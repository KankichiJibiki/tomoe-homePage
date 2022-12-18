import { Component, OnInit } from '@angular/core';
import { IntroService } from './intro.service';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.component.html',
  styleUrls: ['./intro-modal.component.css']
})
export class IntroModalComponent implements OnInit {

  constructor(
    public introService: IntroService,
  ) { }

  ngOnInit(): void {
  }

}
