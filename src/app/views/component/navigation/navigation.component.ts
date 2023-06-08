import { NavigationService } from './../../../service/navigation/navigation.service';
import { GlobalService } from './../../../service/global/global.service';
import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faLocationDot = faLocationDot;

  constructor(
    public globalService: GlobalService,
    public navService: NavigationService
  ) {
  }

  ngOnInit(): void {
    let nav = document.getElementById('nav');
    this.navService.navDoc = nav;
  }
}
