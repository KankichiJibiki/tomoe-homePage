import { ApiUrls } from 'src/app/constants/ApiUrls';
import { S3Request } from 'src/app/model/s3Request';
import { ImageList } from 'src/app/interfaces/imageList';
import { NavigationService } from './../../service/navigation/navigation.service';
import { HomeService } from './../../service/home/home.service';
import { DiaryService } from './../../service/diary/diary.service';
import { IntroService } from './../../service/introduction/intro.service';
import { GlobalService } from './../../service/global/global.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
    this.globalService.initialImage = '../../assets/images/tomoe-image10.JPG';
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
        if(res.data.length <= 0) return;
        this.imageList = res.data;
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
