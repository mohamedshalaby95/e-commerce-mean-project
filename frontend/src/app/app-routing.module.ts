import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// import { TodosComponent } from './todo/components/todos/todos.component';


const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'profile' ,component:ProfileComponent},

  {path: "", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: "", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule )},
  {path: "admin", loadChildren: () => import('./dash-bord-admin/dash-bord-admin.module').then(m => m.DashBordAdminModule )},

  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) ,canActivate:[authGuard] },
  {path: "", loadChildren: () => import('./cart/cart.module').then(m => m.CartModule )},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
