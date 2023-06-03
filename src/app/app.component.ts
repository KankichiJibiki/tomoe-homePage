import { Component, HostListener } from '@angular/core';
import { NavigationService } from './navigation/navigation.service';
import { environment } from 'src/environments/environment';

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
    console.log(environment.production);
    if(this.navService.isProgressing) return;

    this.navService.hide();
    this.navService.isCollapsed = true;
  }
}
