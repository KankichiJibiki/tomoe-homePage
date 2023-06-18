import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkPageComponent } from './drink-page.component';

const routes: Routes = [
  {
    path: '', 
    component: DrinkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkPageRoutingModule { }
