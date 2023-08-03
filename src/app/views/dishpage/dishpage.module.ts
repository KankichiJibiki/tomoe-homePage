import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishpageRoutingModule } from './dishpage-routing.module';
import { DishHeaderIntroComponent } from '../component/dish/dish-header-intro.component';
import { DishpageEnComponent } from './dishpage-en/dishpage-en.component';
import { DishpageComponent } from './dishpage.component';
import { SharedModule } from '../common/shared/shared.module';
import { SeasonalCourseComponent } from '../component/seasonal-course/seasonal-course.component';


@NgModule({
  declarations: [
    DishpageComponent,
    DishpageEnComponent,
    DishHeaderIntroComponent,
    SeasonalCourseComponent,
  ],
  imports: [
    CommonModule,
    DishpageRoutingModule,
    SharedModule,
  ]
})
export class DishpageModule { }
