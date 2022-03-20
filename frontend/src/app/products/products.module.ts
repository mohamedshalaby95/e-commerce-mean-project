import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInseptorsService } from './inseptors/token-inseptors.service';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    SharedModule,
    NgbModule,
    NgxSmartModalModule.forRoot()
  ],
  // providers:[{provide:HTTP_INTERCEPTORS,useClass:token-TokenInseptorsService,multi:true}]
})
export class ProductsModule { }
