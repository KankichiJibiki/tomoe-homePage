import { DiaryPageComponent } from './views/home/diary-page/diary-page.component';
import { DrinkPageComponent } from './views/drink-page/drink-page.component';
import { DishpageComponent } from './views/dishpage/dishpage.component';
import { ReservationPageComponent } from './views/reservation-page/main/reservation-page.component';
import { MapPageComponent } from './views/map-page/map-page.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'diaryPage/:post_id', component: DiaryPageComponent},
  {
    path: 'dishpage', 
    loadChildren: () => import('./views/dishpage/dishpage.module').then(m => m.DishpageModule)
  },
  {
    path: 'drinkpage', 
    loadChildren: () => import('./views/drink-page/drink-page.module').then(m => m.DrinkPageModule)
  },
  {
    path: 'mapPage', 
    loadChildren: () => import('./views/map-page/map-page.module').then(m => m.MapPageModule)
  },
  {
    path: 'reservation', 
    loadChildren: () => import('./views/reservation-page/reservation-page.module').then(m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50],
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
