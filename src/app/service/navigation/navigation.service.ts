import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public offset: number = -83;
  navDoc: any;
  isCollapsed = true;
  isProgressing: boolean = false;

  constructor() { }

  hide(){
    this.navDoc.style.transition = .5 + 's';
    this.navDoc.style.top = this.offset + 'px';
    this.isProgressing = true;

    let myInterval = setInterval(()=>{
      this.navDoc.style.top = 0;
      clearInterval(myInterval);
      this.isProgressing = false;
    }, 3500)
  }
}
