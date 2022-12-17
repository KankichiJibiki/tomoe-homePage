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
  counter: number = 0;
  imageAmount: number = this.images.length;
  returnImage: string = "";
  imagePath: string = '../assets/images/';
  myInterval: any;


  constructor() { }

  getImage(){
    this.returnImage = this.images[(this.counter%this.imageAmount)];
    this.counter++;
    return this.returnImage;
  }
}
