import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishpageComponent } from './dishpage.component';

const routes: Routes = [
  {
    path: '', 
    component: DishpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishpageRoutingModule { }
