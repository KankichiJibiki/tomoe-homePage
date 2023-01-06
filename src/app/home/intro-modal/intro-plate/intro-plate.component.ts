import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { IntroService } from '../intro.service';

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
