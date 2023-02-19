import { DrinkPageComponent } from './home/drink-page/drink-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryPageComponent } from './home/diary-page/diary-page.component';
import { DishpageComponent } from './home/dishpage/dishpage.component';
import { HomeComponent } from './home/home.component';
import { MapPageComponent } from './home/map-page/map-page.component';
import { ReservationPageComponent } from './home/reservation-page/reservation-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mapPage', component: MapPageComponent},
  {path: 'reservation', component: ReservationPageComponent},
  {path: 'dishpage', component: DishpageComponent},
  {path: 'drinkpage', component: DrinkPageComponent},
  {path: 'diaryPage/:post_id', component: DiaryPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  anchorScrolling: 'enabled',
  scrollOffset: [0, 50],
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
