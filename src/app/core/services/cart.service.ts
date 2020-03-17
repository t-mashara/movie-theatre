import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {CartItem, getPrice} from '../model/CartItem';
import {Product} from '../model/Product';
import {map} from 'rxjs/operators';
import {ProductsService} from './products.service';
import {AssociativeArray} from '../model/AssociativeArray';
import {IProductsService} from '../model/IProductsService';

const mapQuantities = ([products, quantities]: [Product[], AssociativeArray<number>]): CartItem[] => {
  return products
    .filter(({ id }) => quantities[id])
    .map((p: CartItem) => {
      p.quantity = quantities[p.id];
      p.total = getPrice(p);
      return p;
    });
};

const collectPrices = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + getPrice(item), 0);

const collectQuantities = (items: CartItem[]): number =>
  items.reduce((sum, { quantity }) => sum + quantity, 0);

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $quantities = new BehaviorSubject<AssociativeArray<number>>({
    [Object.keys(this.productsService.value)[0]]: 1,
    [Object.keys(this.productsService.value)[1]]: 1,
    [Object.keys(this.productsService.value)[2]]: 1,
  });

  constructor(
    @Inject(ProductsService) private readonly productsService: ProductsService
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
      map(mapQuantities)
    );
  }

  get totalPrice(): Observable<number> {
    return this.list.pipe(map(collectPrices));
  }

  get totalCount(): Observable<number> {
    return this.list.pipe(map(collectQuantities));
  }
}
