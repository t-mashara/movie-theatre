import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CartService} from '../../../core/services/cart.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mt-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  list = this.cartService.list;
  length = this.list.pipe(map(list => list.length));
  totalPrice = this.cartService.totalPrice;

  constructor(
    private readonly cartService: CartService,
  ) {}
}
