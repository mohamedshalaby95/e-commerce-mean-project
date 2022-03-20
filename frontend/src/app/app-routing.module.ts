import { authGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodosComponent } from './todo/components/todos/todos.component';


const routes: Routes = [

  {path: "", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: "", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule )},
  {path: "admin", loadChildren: () => import('./dash-bord-admin/dash-bord-admin.module').then(m => m.DashBordAdminModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
