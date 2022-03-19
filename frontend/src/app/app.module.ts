import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { TokenInseptorsService } from './products/inseptors/token-inseptors.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, NgxSmartModalModule.forRoot()
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
