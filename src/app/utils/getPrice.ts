import {CartItem} from '../core/model/CartItem';

/**
 * Returns a price for a promo product
 */
const getPricePromo = ({ quantity, price, promo: { requiredAmount, priceAmount } }: CartItem) =>
  ((quantity % requiredAmount) + Math.floor(quantity / requiredAmount ) * priceAmount) * price;

/**
 * Returns a price for regular product
 */
const getPriceDefault = ({ price, quantity}: CartItem) => price * quantity;

/**
 * Returns a price for a cartItem (product)
 */
export const getPrice = (cartItem: CartItem) => cartItem.promo ? getPricePromo(cartItem) : getPriceDefault(cartItem);
