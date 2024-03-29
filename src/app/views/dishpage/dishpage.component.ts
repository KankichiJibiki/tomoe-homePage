import { GlobalService } from './../../service/global/global.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/constants/ApiUrls';
import { ImageList } from 'src/app/interfaces/imageList';
import { S3Request } from 'src/app/model/s3Request';

@Component({
  selector: 'app-dishpage',
  templateUrl: './dishpage.component.html',
  styleUrls: ['./dishpage.component.css']
})
export class DishpageComponent implements OnInit, OnDestroy {
  s3RequestOptions = new S3Request();
  imageList: ImageList[] = [];

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
    this.gService.initialImage = '../../../assets/images/crab4.jpg';
    this.getImagesFromS3();
  }

  getImagesFromS3() {
    if(this.imageList.length > 0) {
      this.gService.animated(true, this.imageList);
      return;
    }

    this.s3RequestOptions.prefix = ApiUrls.DISH;
    this.gService.downloadImagesFromS3(this.s3RequestOptions).subscribe({
      next: (res: Response | any) => {
        if(res.data.length <= 0) return;
        this.imageList = res.data;
        this.gService.animated(true, this.imageList);
      },
      error: (res: any) => {
        console.log(res.message);
      },
      complete: () => {
      }
    });
  }

  ngOnDestroy(): void {
      this.gService.clearMyInterval();
  }
}
