import {CartService} from '../services/cart.service';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly count = this.cartService.totalCount;
  constructor(
    private readonly cartService: CartService
  ) {}
}
