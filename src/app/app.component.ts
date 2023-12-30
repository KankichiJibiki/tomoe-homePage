import { MatDialog } from '@angular/material/dialog';
import { NavigationService } from './service/navigation/navigation.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { PopupComponent } from './views/component/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public navService: NavigationService,
    private dialog: MatDialog
  ){
  }
  ngOnInit(): void {
    this.openPopUpAnnouncement();
  }

  openPopUpAnnouncement(): void {
    this.dialog.open(PopupComponent, {
      width: '400px'
    })
  }

  @HostListener('window: scroll', ['$event']) onScroll(e: Event): void {
    if(this.navService.isProgressing) return;

    this.navService.hide();
    this.navService.isCollapsed = true;
  }
}
