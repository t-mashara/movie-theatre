import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from './shop/pages/shop/shop.component';
import {CartComponent} from './shop/pages/cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
