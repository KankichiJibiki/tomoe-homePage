import { Injectable } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isEnglish: boolean = false;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faMap = faMap;
  faInsta = faInstagram;
  faTwitter = faTwitter;

  images: string[] = [
    'tomoe-image1.JPG',
    'tomoe-image2.JPG',
    'tomoe-image3.JPG',
    'tomoe-image4.JPG',
    'tomoe-image5.JPG',
    'tomoe-image6.JPG',
    'tomoe-image7.JPG',
    'tomoe-image8.JPG',
    'tomoe-image9.JPG',
    'tomoe-image10.JPG',
  ];
  imageAmount: number = this.images.length;
  counter: number = Math.floor(Math.random()*(this.imageAmount+0));
  returnImage: string = "";
  effect: boolean = false;
  fullPath: string = '';
  myInterval: any;
  
  rawPosts: any;
  posts: any;

  //For ajax
    public base_url: string = 'https://tomoereservation-env.eba-9z6xx2ex.ap-northeast-1.elasticbeanstalk.com/tomoe_db_restapi_prod/';
    // public base_url: string = 'http://localhost/tomoe_db_restapi_prod/';
  //


  constructor() { }

  startGoCircleImages(element: any, imagePath: string, effect: boolean){
    this.myInterval = setInterval (() => {
      this.effect = effect;
      this.animationImages(element, imagePath);
    }, 5000);
  }

  animationImages(element: any, imagePath: string){
    this.fullPath = imagePath + this.getImage();
    element.style.backgroundImage = 'url(' + this.fullPath + ')';
    if(this.effect) element.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(' + this.fullPath + ')';
    else element.style.backgroundImage = 'url(' + this.fullPath + ')';
  }

  getImage(){
    this.returnImage = this.images[(this.counter%this.imageAmount)];
    this.counter++;
    return this.returnImage;
  }

  clearMyInterval(): void{
    clearInterval(this.myInterval);
    console.log('cleared interval')
  }
}
