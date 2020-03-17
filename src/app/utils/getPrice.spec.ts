import {CartItem} from '../core/model/CartItem';
import {getPrice} from './getPrice';

describe('getPrice', () => {
  const testCartItem: CartItem = {
    name: 'Soda',
    price: 4,
    quantity: 2,
  };

  const testCartItemPromo: CartItem = {
    name: 'Snickers',
    price: 5,
    quantity: 5,
    promo: {
      requiredAmount: 5,
      priceAmount: 3,
    }
  };

  const testCartItemPromo2: CartItem = {
    name: 'Snickers',
    price: 5,
    quantity: 6,
    promo: {
      requiredAmount: 5,
      priceAmount: 3,
    }
  };

  it('should return a regular price', () => {
    expect(getPrice(testCartItem)).toEqual(8);
  });

  it('should return price for 3 items', () => {
    expect(getPrice(testCartItemPromo)).toEqual(15);
  });

  it('should return price for 4 items', () => {
    expect(getPrice(testCartItemPromo2)).toEqual(20);
  });
});
