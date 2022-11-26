import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faLocationDot = faLocationDot;
  isCollapsed = true;

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
