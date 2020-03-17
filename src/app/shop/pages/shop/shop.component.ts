import {CartService} from '../../../core/services/cart.service';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';

@Component({
  selector: 'mt-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
  readonly products = this.productsService.list;
  readonly quantities = this.cartService.data;

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
  ) {}
}
