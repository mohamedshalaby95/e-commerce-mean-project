import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule, NgbModule],
})
export class CartModule {}
