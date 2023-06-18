import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInfoComponent } from '../base-info/base-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    BaseInfoComponent,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
