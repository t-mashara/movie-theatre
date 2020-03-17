import {of} from 'rxjs';
import {CartService} from './cart.service';
import {TestBed} from '@angular/core/testing';
import {ProductsService} from './products.service';
import {IProductsService} from '../model/IProductsService';

describe('CartService', () => {
  let service: CartService;

  const testProducts = [
    {
      id: '1',
      name: 'Snickers',
      price: 2,
    },
    {
      id: '2',
      name: 'Soda',
      price: 3,
    }
  ];

  const testProductsService: IProductsService = {
    list: of(testProducts),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ProductsService, useValue: testProductsService}
      ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty object', done => {
    service.data.subscribe(data => {
      expect(data).toEqual({});
      done();
    });
  });

  it('should return an empty array', done => {
    service.list.subscribe(data => {
      expect(data).toEqual([]);
      done();
    });
  });

  it('should add one item to quantities object', done => {
    service.add('1');
    service.data.subscribe(data => {
      expect(data['1']).toBe(1);
      done();
    });
  });

  it('should remove one item to quantities object', done => {
    service.add('1');
    service.add('1');
    service.remove('1');
    service.data.subscribe(data => {
      expect(data['1']).toBe(1);
      done();
    });
  });

  it('should remove property from quantities object', done => {
    service.add('1');
    service.remove('1');
    service.data.subscribe(data => {
      expect(data['1']).toBe(undefined);
      done();
    });
  });

  it('(removeItem) should remove property from quantities object', done => {
    service.add('1');
    service.add('1');
    service.removeItem('1');
    service.data.subscribe(data => {
      expect(data['1']).toBe(undefined);
      done();
    });
  });

  it('should return a list from with one cart item', done => {
    service.add('1');
    service.list.subscribe(list => {
      expect(list.length).toBe(1);
      done();
    });
  });

  it('should return a list from with two cart items', done => {
    service.add('1');
    service.add('2');
    service.list.subscribe(list => {
      expect(list.length).toBe(2);
      done();
    });
  });
});
