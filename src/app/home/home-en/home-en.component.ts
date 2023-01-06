import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { DiaryService } from '../diary-page/diary.service';
import { HomeService } from '../home.service';
import { IntroService } from '../intro-modal/intro.service';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['../home.component.css']
})
export class HomeEnComponent implements OnInit {
  imageBackGround: any;
  fullPath: string = '';
  imagePath: string = '../../assets/images/';
  myInterval: any;

  constructor(
    public homeService: HomeService,
    public introService: IntroService,
    public diaryService: DiaryService,
    public globalService: GlobalService,
  ) { }

  ngOnInit(): void {
  }
}
