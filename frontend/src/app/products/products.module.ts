import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, ConfirmComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    SharedModule,
    NgbModule,

    NgxSmartModalModule.forRoot(),
  ],
})
export class ProductsModule {}
