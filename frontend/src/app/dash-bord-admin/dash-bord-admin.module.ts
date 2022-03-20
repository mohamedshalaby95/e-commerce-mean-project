import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBordAdminRoutingModule } from './dash-bord-admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminProductComponent } from './components/admin-product/admin-product.component';


@NgModule({
  declarations: [
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    DashBordAdminRoutingModule,
    SharedModule

  ]
})
export class DashBordAdminModule { }
