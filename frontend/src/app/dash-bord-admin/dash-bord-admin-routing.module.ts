import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { OrderComponent } from './components/order/order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminGurdService } from './gaurds/admin-gurd.service';
import { OrdersComponent } from './components/products/orders.component';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    canActivate: [AdminGurdService],

    children: [
      {
        path: 'order',
        component: AdminProductComponent,
        canActivate: [AdminGurdService],
        children: [
          {
            path: 'pending',
            component: PendingOrdersComponent,
            canActivate: [AdminGurdService],
          },
          { path: '', component: OrderComponent, pathMatch: 'full' },
        ],
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBordAdminRoutingModule {}
