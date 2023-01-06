import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from '../service/global.service';
import { NavigationService } from './navigation.service';

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
