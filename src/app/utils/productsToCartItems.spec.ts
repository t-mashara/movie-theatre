import {productsToCartItems} from './productsToCartItems';

describe('productsToCartItems', () => {
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

  const testQuantities = {
    1: 2,
    2: 3
  };

  it('should return an empty array', () => {
    expect(productsToCartItems([[], {}])).toEqual([]);
  });

  it('should return an empty array with no quantities', () => {
    expect(productsToCartItems([testProducts, {}])).toEqual([]);
  });

  it('should map quantities', () => {
    const cartItems = productsToCartItems([testProducts, testQuantities]);
    const testCartItem = cartItems.find(item => item.id === '1');
    expect(testCartItem.quantity).toBe(2);
  });

  it('should calculate total price for a cartItem', () => {
    const cartItems = productsToCartItems([testProducts, testQuantities]);
    const testCartItem = cartItems.find(item => item.id === '1');
    expect(testCartItem.total).toBe(4);
  });
});
