import {Product} from '../model/Product';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  const testProduct: Product = {
    name: 'Soda',
    price: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized with empty object', () => {
    expect(service.value).toEqual({});
  });

  it('should be initialized with empty array', (done) => {
    service.list.subscribe(list => {
      expect(list).toEqual([]);
      done();
    });
  });

  it('creating product should work', () => {
    service.create({...testProduct});
    const created = Object.values(service.value)[0];
    expect(created).toBeTruthy();
  });

  it('updating product should work', () => {
    service.create({...testProduct});
    const created = Object.values(service.value)[0];
    const name = 'Popcorn';
    service.update({...created, name });
    expect(Object.values(service.value)[0].name).toEqual(name);
  });

  it('deleting product should work', () => {
    service.create({...testProduct});
    const created = Object.values(service.value)[0];
    service.delete(created);
    expect(Object.values(service.value)[0]).toBeFalsy();
  });
});
