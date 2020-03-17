import {Product} from '../core/model/Product';
import {AssociativeArray} from '../core/model/AssociativeArray';
import {CartItem} from '../core/model/CartItem';
import {getPrice} from './getPrice';

/**
 * Maps quantities to product items and calculates prices
 * @param products an array of products
 * @param quantities an associative array of quantities
 */
export const productsToCartItems = ([products, quantities]: [Product[], AssociativeArray<number>]): CartItem[] => {
  return products.reduce((acc: CartItem[], item: Product) => {
    if (quantities[item.id]) {
      const cartItem: CartItem = { ...item, quantity: quantities[item.id] };
      cartItem.total = getPrice(cartItem);
      acc.push(cartItem);
    }
    return acc;
  }, []);
};
