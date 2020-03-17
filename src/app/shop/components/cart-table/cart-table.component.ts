import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CartItem} from '../../../core/model/CartItem';
import {CartService} from '../../../core/services/cart.service';

@Component({
  selector: 'mt-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTableComponent {
  @Input() cartItems: CartItem[];

  constructor(
    private readonly cartService: CartService,
  ) {}

  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }

  add(id: string): void {
    this.cartService.add(id);
  }

  remove(id: string): void {
    this.cartService.remove(id);
  }
}
