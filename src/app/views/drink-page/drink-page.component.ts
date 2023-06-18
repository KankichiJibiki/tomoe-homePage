import { GlobalService } from './../../service/global/global.service';
import { ImageList } from 'src/app/model/imageList';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { S3Request } from 'src/app/model/s3Request';
import { ApiUrls } from 'src/app/constants/ApiUrls';

@Component({
  selector: 'app-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.css']
})
export class DrinkPageComponent implements OnInit, OnDestroy{
  color: string = "black";
  linkColor: string = "white";
  s3RequestOptions = new S3Request();
  imageList: ImageList[] = [];

  constructor(
    public gService: GlobalService,
  ) { }



  ngOnInit(): void {
    this.gService.initialImage = '../../../assets/images/inner2.jpeg';
    this.getImagesFromS3();
  }

  getImagesFromS3() {
    if(this.imageList.length > 0) {
      this.gService.animated(true, this.imageList);
      return;
    }

    this.s3RequestOptions.prefix = ApiUrls.DRINK;
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
