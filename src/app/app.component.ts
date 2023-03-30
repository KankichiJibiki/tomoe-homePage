import { Component, HostListener } from '@angular/core';
import { NavigationService } from './navigation/navigation.service';

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
    this.navService.hide();
    this.navService.isCollapsed = true;
  }
}
