import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShopModule} from './shop/shop.module';
import {HeaderComponent} from './core/header/header.component';
import {PRODUCTS, PRODUCTS_MOCK} from './core/mocks/products';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
  ],
  providers: [
    {
      provide: PRODUCTS_MOCK,
      useValue: PRODUCTS,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
