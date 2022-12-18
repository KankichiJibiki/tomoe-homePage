import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { IntroService } from './intro-modal/intro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageBackGround: any;
  fullPath: string = '';
  imagePath: string = '../../assets/images/';
  myInterval: any;

  constructor(
    public globalService: GlobalService,
    public introService: IntroService,
  ) { }

  ngOnInit(): void {
    this.imageBackGround = document.getElementById('header_intro');
    this.globalService.startGoCircleImages(this.imageBackGround, this.imagePath, true);
  }
}
