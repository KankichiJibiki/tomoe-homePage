import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public offset: number = -83;
  navDoc: any;
  isCollapsed = true;

  constructor() { }

  hide(){
    this.navDoc.style.transition = .5 + 's';
    this.navDoc.style.top = this.offset + 'px';

    let myInterval = setInterval(()=>{
      this.navDoc.style.top = 0;
      clearInterval(myInterval);
    }, 3500)
  }
}
