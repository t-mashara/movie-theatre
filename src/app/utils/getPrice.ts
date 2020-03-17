import {CartItem} from '../core/model/CartItem';

const getPricePromo = ({ quantity, price, promo: { requiredAmount, priceAmount } }: CartItem) =>
  ((quantity % requiredAmount) + Math.floor(quantity / requiredAmount ) * priceAmount) * price;

const getPriceDefault = ({ price, quantity}: CartItem) => price * quantity;

export const getPrice = (cartItem: CartItem) => cartItem.promo ? getPricePromo(cartItem) : getPriceDefault(cartItem);
