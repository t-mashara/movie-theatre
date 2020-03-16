import {map} from 'rxjs/operators';
import {Product} from '../model/Product';
import {BehaviorSubject, Observable} from 'rxjs';
import {getUniqID} from '../../utils/getUniqID';
import {PRODUCTS_MOCK} from '../mocks/products';
import {Inject, Injectable, Optional} from '@angular/core';
import {AssociativeArray} from '../model/AssociativeArray';
import {IProductsService} from '../model/IProductsService';
import {toAssociativeArray} from '../../utils/toAssociativeArray';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProductsService {
  private readonly $data: BehaviorSubject<AssociativeArray<Product>>;

  constructor(
    @Optional() @Inject(PRODUCTS_MOCK) private readonly initialProducts: Product[]
  ) {
    this.$data = new BehaviorSubject(toAssociativeArray('id', initialProducts || []));
  }

  public get value(): AssociativeArray<Product> {
    return this.$data.value;
  }

  public get items(): Observable<AssociativeArray<Product>> {
    return this.$data.asObservable();
  }

  update(product: Product): void {
    const { id } = product;
    const { value } = this.$data;
    if (!(id in value)) {
      return;
    }
    this.$data.next({...value, [id]: product});
  }

  create(product: Product): void {
    const id = product.id = getUniqID();
    this.$data.next({...this.$data.value, [id]: product});
  }

  delete({ id }: Product): void {
    const { value } = this.$data;
    if (!(id in value)) {
      return;
    }
    delete value[id];
    this.$data.next({...value});
  }

  get list(): Observable<Product[]> {
    return this.$data.pipe(
      map(data => Object.values(data))
    );
  }
}
