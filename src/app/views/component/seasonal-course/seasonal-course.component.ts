import { Component, OnInit } from '@angular/core';
import { ExcludedMenuInterface } from 'src/app/interfaces/excludedMenuInterface';
import { ExcludedDishs } from 'src/app/model/excludedMenus';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'app-seasonal-course',
  templateUrl: './seasonal-course.component.html',
  styleUrls: ['./seasonal-course.component.css']
})
export class SeasonalCourseComponent implements OnInit {
  today = new Date(Date.now());
  limitedCourse: ExcludedMenuInterface = new ExcludedDishs().obonMenu;
  isLimitedCourseOn: boolean = false;
  displayImage: String = "";
  imageCounter: number = 0;

  constructor(
    public gService: GlobalService,
  ) { }

  ngOnInit(): void {
    //* change it case by case
    this.isLimitedCourseOn = this._checkOnTimeFrame(this.limitedCourse);
    if(this.isLimitedCourseOn){
      this.displayImage = this.limitedCourse.image != undefined ? this.limitedCourse.image[this.imageCounter] : "";
    }
  }

  public changeImage(operator: number){
    this.imageCounter += operator;
    if(this.limitedCourse.image != undefined){
      let imageNumber = this.limitedCourse.image != undefined ? this.imageCounter%this.limitedCourse.image.length : 0;
      this.displayImage = this.limitedCourse.image[imageNumber];
    }
  }
  
  private _checkOnTimeFrame(limitedCourse: ExcludedMenuInterface): boolean{
    if(limitedCourse.start == null || limitedCourse.end == null)
      return false;

    return this.today > limitedCourse.start && limitedCourse.end > this.today;
  }
}
