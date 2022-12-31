import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { IntroService } from './intro-modal/intro.service';
import { DiaryService } from './diary-page/diary.service';
import { HomeService } from './home.service';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
  imageBackGround: any;
  fullPath: string = '';
  imagePath: string = '../../assets/images/';
  myInterval: any;

  constructor(
    public globalService: GlobalService,
    public introService: IntroService,
    public diaryService: DiaryService,
    public homeService: HomeService,
    public navService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.imageBackGround = document.getElementById('header_intro_en');
  }

  ngAfterViewInit(): void {
    this.imageBackGround = document.getElementById('header_intro');
    this.globalService.startGoCircleImages(this.imageBackGround, this.imagePath, true);

    this.homeService.getInstaInfo();
  }

  ngAfterViewChecked(): void {
    this.imageBackGround = document.getElementById('header_intro_en');
  }

  ngOnDestroy(): void {
      this.globalService.clearMyInterval();
  }
}
