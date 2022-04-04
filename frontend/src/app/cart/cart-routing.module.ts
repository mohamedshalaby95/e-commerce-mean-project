import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [

 
  {path:"cart", component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
