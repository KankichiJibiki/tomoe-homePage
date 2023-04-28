import { ImageList } from './../model/imageList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faLeaf, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment.prod';
import { ApiUrls } from '../constants/ApiUrls';
import { S3Request } from '../model/s3Request';
import { Observable, BehaviorSubject } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GlobalService {
  isEnglish: boolean = false;
  isSlideStarted: boolean = false;

  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faMap = faMap;
  faInsta = faInstagram;
  faTwitter = faTwitter;
  faLeaf = faLeaf;

  imageList: ImageList[] = [];
  counter: number = 0;
  initialImage: string = '../../assets/images/tomoe-image1.JPG';
  currentImage?: Observable<any>;
  currImage = new BehaviorSubject<ImageList | null>(null);
  nextImage = new BehaviorSubject<ImageList | null>(null);
  
  effect: boolean = false;
  myInterval: any;
  
  rawPosts: any;
  posts: any;

  constructor(
    private http : HttpClient,
  ) { }

  downloadImagesFromS3(options: S3Request) : Observable<Response>{
    let url = `${environment.apiUrl}${ApiUrls.IMAGE_URL}${ApiUrls.IMAGE_ACTION_GETIMAGE}`;
    return this.http.post<Response>(url, options);
  }

  animated(
    effect: boolean, 
    imageList: ImageList[]
  ): void {
    this.imageList = imageList;
    this.nextImage.next(this.imageList[(this.counter)]);

    this.counter = Math.floor(Math.random()*(this.imageList.length+0));
    this.myInterval = interval(5000).subscribe(() => {
      this.runAnimation();
    })
  }

  runAnimation(){
    //* main
    this.counter = (this.counter%this.imageList.length);
    this.currImage.next(this.imageList[(this.counter%this.imageList.length)]);
    this.counter++;

    //* next (For loading proactively not to transition delay even instance)
    this.counter = (this.counter%this.imageList.length);
    this.nextImage.next(this.imageList[(this.counter%this.imageList.length)]);

    this.isSlideStarted = true;
  }

  clearMyInterval(): void{
    this.myInterval.unsubscribe();
    console.log('cleared interval')
  }
}

export enum DisplayMainOrNext {
  Main,
  Next,
}
