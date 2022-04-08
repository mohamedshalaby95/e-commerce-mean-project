import { PurchaseComponent } from './components/purchase/purchase.component';
import { authGuard } from './../auth/guards/auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  { path: 'purchase', component: PurchaseComponent, canActivate: [authGuard] },
  {
    path: 'payment/:id',
    component: PaymentComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
