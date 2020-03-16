import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../core/services/cart.service';
import {ShopComponent} from './pages/shop/shop.component';
import {CartComponent} from './pages/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopComponent,
    CartComponent,
  ]
})
export class ShopModule {}
