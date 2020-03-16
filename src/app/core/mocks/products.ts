import {Product} from '../model/Product';
import {getUniqID} from '../../utils/getUniqID';
import {InjectionToken} from '@angular/core';

export const PRODUCTS_MOCK = new InjectionToken('Products mock');

export const PRODUCTS: Product[] = [
  {
    name: 'Popcorn',
    price: 3,
  },
  {
    name: 'Snickers',
    price: 4,
    promo: {
      requiredAmount: 5,
      priceAmount: 3,
    }
  },
  {
    name: 'Soda',
    price: 2,
  },
].map((item: Product) => {
  item.id = getUniqID();
  return item;
});
