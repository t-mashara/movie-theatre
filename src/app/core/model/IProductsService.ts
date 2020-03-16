import {Observable} from 'rxjs';
import {Product} from './Product';

export interface IProductsService {
  readonly list: Observable<Product[]>;
}
