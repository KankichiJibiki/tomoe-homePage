import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { IntroService } from './intro-modal/intro.service';
import { DiaryService } from './diary-page/diary.service';
import { HomeService } from './home.service';
import { NavigationService } from '../navigation/navigation.service';
import { ImageList } from '../model/imageList';
import { S3Request } from '../model/s3Request';
import { ApiUrls } from '../constants/ApiUrls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  s3RequestOptions = new S3Request();
  imageList: ImageList[] = [];

  constructor(
    public globalService: GlobalService,
    public introService: IntroService,
    public diaryService: DiaryService,
    public homeService: HomeService,
    public navService: NavigationService
  ) {}

  ngOnInit(): void {
    this.getImagesFromS3();
    this.homeService.getInstaInfo();
  }

  getImagesFromS3() {
    if(this.imageList.length > 0) {
      this.globalService.animated(true, this.imageList);
      return;
    }

    this.s3RequestOptions.prefix = ApiUrls.MAIN;
    this.globalService.downloadImagesFromS3(this.s3RequestOptions).subscribe({
      next: (res: Response | any) => {
        console.log(res.message);
        this.imageList = res.data;
        console.log(this.imageList);
        
        this.globalService.animated(true, this.imageList);
      },
      error: (res: any) => {
        console.log(res.message);
      },
      complete: () => {
      }
    });
  }

  ngOnDestroy(): void {
      this.globalService.clearMyInterval();
  }
}
