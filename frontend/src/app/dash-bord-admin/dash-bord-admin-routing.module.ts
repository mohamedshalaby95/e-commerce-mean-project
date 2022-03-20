import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminGurdService } from './gaurds/admin-gurd.service';

const routes: Routes = [
  {path:"" ,component:AdminProductComponent,canActivate : [AdminGurdService] },
// {path:"register" ,component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBordAdminRoutingModule { }
