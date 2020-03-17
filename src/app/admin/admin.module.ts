import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
