import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [CheckoutComponent, PurchaseComponent, PaymentComponent],
  imports: [CommonModule, SharedModule, OrderRoutingModule],
})
export class OrderModule {}
