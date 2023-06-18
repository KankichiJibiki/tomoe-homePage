import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkPageRoutingModule } from './drink-page-routing.module';
import { SharedModule } from '../common/shared/shared.module';
import { DrinkPageComponent } from './drink-page.component';
import { DrinkPageEnComponent } from './drink-page-en/drink-page-en.component';
import { DrinkHeaderIntroComponent } from '../component/drink/drink-header-intro/drink-header-intro.component';


@NgModule({
  declarations: [
    DrinkPageComponent,
    DrinkPageEnComponent,
    DrinkHeaderIntroComponent,
  ],
  imports: [
    CommonModule,
    DrinkPageRoutingModule,
    SharedModule,
  ]
})
export class DrinkPageModule { }
