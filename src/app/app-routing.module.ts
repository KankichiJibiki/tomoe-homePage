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
