import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBordAdminRoutingModule } from './dash-bord-admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { OrderComponent } from './components/order/order.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { OrdersComponent } from './components/products/orders.component';

@NgModule({
  declarations: [
    AdminProductComponent,
    DialogComponent,
    OrderComponent,
    DashbordComponent,
    SideNavbarComponent,
    PendingOrdersComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, DashBordAdminRoutingModule, SharedModule],
})
export class DashBordAdminModule {}
