import {map} from 'rxjs/operators';
import {getSum} from '../../utils/getSum';
import {CartItem} from '../model/CartItem';
import {Inject, Injectable} from '@angular/core';
import {ProductsService} from './products.service';
import {AssociativeArray} from '../model/AssociativeArray';
import {IProductsService} from '../model/IProductsService';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {productsToCartItems} from '../../utils/productsToCartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $quantities = new BehaviorSubject<AssociativeArray<number>>({});

  constructor(
    @Inject(ProductsService) private readonly productsService: IProductsService
  ) {}

  add(id: string): void {
    const { value } = this.$quantities;
    const next = id in value ? value[id] + 1 : 1;
    this.$quantities.next({...this.$quantities.value, [id]: next});
  }

  remove(id: string): void {
    const { value } = this.$quantities;
    if (value[id] === 1) {
      delete value[id];
    } else if (value[id]) {
      value[id] -= 1;
    }
    this.$quantities.next({...value});
  }

  removeItem(id: string): void {
    const { value } = this.$quantities;
    if (!(id in value)) {
      return;
    }
    delete value[id];
    this.$quantities.next({...value});
  }

  get data(): Observable<AssociativeArray<number>> {
    return this.$quantities.asObservable();
  }

  get list(): Observable<CartItem[]> {
    return combineLatest([this.productsService.list, this.data]).pipe(
      map(productsToCartItems)
    );
  }

  get totalPrice(): Observable<number> {
    return this.list.pipe(
      map(getSum.bind(null, 'total'))
    );
  }

  get totalCount(): Observable<number> {
    return this.list.pipe(
      map(getSum.bind(null, 'quantity'))
    );
  }
}
