import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';
import {CartService} from '../../../core/services/cart.service';
import {Subject} from 'rxjs';
import {AssociativeArray} from '../../../core/model/AssociativeArray';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'mt-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  private readonly destroyed = new Subject();

  readonly products = this.productsService.list;
  quantities: AssociativeArray<number>;

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartService.data.pipe(
      takeUntil(this.destroyed)
    ).subscribe(data => {
      this.quantities = data;
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
