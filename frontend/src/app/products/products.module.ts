import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInseptorsService } from './inseptors/token-inseptors.service';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './components/confirm/confirm.component';

// import { NgxMaterialRatingModule } from 'ngx-material-rating';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ConfirmComponent,
 
  ],
  imports: [

    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    SharedModule,
    NgbModule,
    // NgxMaterialRatingModule,
    // BrowserAnimationsModule,
    NgxSmartModalModule.forRoot()
  ],
  // providers:[{provide:HTTP_INTERCEPTORS,useClass:token-TokenInseptorsService,multi:true}]
})
export class ProductsModule { }
