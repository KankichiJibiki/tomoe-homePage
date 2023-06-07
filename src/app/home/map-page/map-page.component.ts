import { Component, OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/constants/ApiUrls';
import { ImageList } from 'src/app/model/imageList';
import { S3Request } from 'src/app/model/s3Request';
import { GlobalService } from 'src/app/service/global.service';
import { ReserveService } from '../reservation-page/reserve.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  s3RequestOptions = new S3Request();
  imageList: ImageList[] = [];

  constructor(
    public globalService: GlobalService,
    public reserveService: ReserveService,
  ) {}

  ngOnInit(): void {
    this.globalService.initialImage = '../../assets/images/tomoe-image5.JPG';
    this.getImagesFromS3();
  }

  getImagesFromS3() {
    if(this.imageList.length > 0) {
      this.globalService.animated(true, this.imageList);
      return;
    }

    this.s3RequestOptions.prefix = ApiUrls.MAP;
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
    this.reserveService.destroyForms();
    this.globalService.clearMyInterval();
  }

}
