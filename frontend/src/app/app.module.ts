import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { TokenInseptorsService } from './products/inseptors/token-inseptors.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { NgxMaterialRatingModule } from 'ngx-material-rating';
// import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
      HomeComponent,
      FooterComponent,
      ProfileComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // NgxMaterialRatingModule ,
    // NgxPaginationModule,
    HttpClientModule, NgxSmartModalModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInseptorsService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
