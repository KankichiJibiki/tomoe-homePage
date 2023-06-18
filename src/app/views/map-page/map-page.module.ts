import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapPageRoutingModule } from './map-page-routing.module';
import { MapPageComponent } from './map-page.component';
import { MapPageEnComponent } from './map-page-en/map-page-en.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    MapPageComponent,
    MapPageEnComponent,
  ],
  imports: [
    CommonModule,
    MapPageRoutingModule,
    SharedModule,
  ]
})
export class MapPageModule { }
