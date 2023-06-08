import { NavigationService } from './service/navigation/navigation.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public navService: NavigationService,
  ){
  }

  @HostListener('window: scroll', ['$event']) onScroll(e: Event): void {
    if(this.navService.isProgressing) return;

    this.navService.hide();
    this.navService.isCollapsed = true;
  }
}
