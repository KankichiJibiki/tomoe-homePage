import { HomeModule } from './views/home/home.module';
import { FooterComponent } from './views/component/navigation/footer/footer.component';
import { NavigationComponent } from './views/component/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { YPipe } from './y.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    YPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    FontAwesomeModule,
    HttpClientModule,
    OverlayModule,
  ],
  providers: [
    NgbActiveModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
