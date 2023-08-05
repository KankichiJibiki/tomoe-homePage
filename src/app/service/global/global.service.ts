import { ApiUrls } from 'src/app/constants/ApiUrls';
import { S3Request } from 'src/app/model/s3Request';
import { ImageList } from 'src/app/interfaces/imageList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faLeaf, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment.prod';
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
  faArrow = faArrowUpRightFromSquare;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  imageList: ImageList[] = [];
  counter: number = 0;
  initialImage: string = '../../assets/images/tomoe-image1.JPG';
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

    this.counter = Math.floor(Math.random()*(this.imageList.length+0));
    this.nextImage.next(this.imageList[(this.counter)]);
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
    this.currImage = new BehaviorSubject<ImageList | null>(null);
    this.nextImage = new BehaviorSubject<ImageList | null>(null);
    this.isSlideStarted = false;
  }
}

export enum DisplayMainOrNext {
  Main,
  Next,
}
