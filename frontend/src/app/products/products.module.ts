import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInseptorsService } from './inseptors/token-inseptors.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgxSmartModalModule.forRoot()
  ],
  // providers:[{provide:HTTP_INTERCEPTORS,useClass:token-TokenInseptorsService,multi:true}]
})
export class ProductsModule { }
