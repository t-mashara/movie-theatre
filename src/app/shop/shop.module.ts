import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../core/services/cart.service';
import {ShopComponent} from './pages/shop/shop.component';
import {CartComponent} from './pages/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    ProductItemComponent,
    CartTableComponent
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
