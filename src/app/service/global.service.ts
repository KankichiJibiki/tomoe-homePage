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
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faMap = faMap;
  faInsta = faInstagram;
  faTwitter = faTwitter;

  constructor() { }
}
