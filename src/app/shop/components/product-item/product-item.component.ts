import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Product} from '../../../core/model/Product';
import {CartService} from '../../../core/services/cart.service';

@Component({
  selector: 'mt-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() quantity = 0;

  constructor(
    private readonly cartService: CartService
  ) {}

  add(): void {
    this.cartService.add(this.product.id);
  }

  remove(): void {
    this.cartService.remove(this.product.id);
  }
}
