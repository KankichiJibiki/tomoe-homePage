import { GlobalService } from './../../../service/global/global.service';
import { DiaryService } from './../../../service/diary/diary.service';
import { IntroService } from './../../../service/introduction/intro.service';
import { HomeService } from './../../../service/home/home.service';
import { Component, OnInit } from '@angular/core';


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
