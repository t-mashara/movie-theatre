import {Product} from './Product';

export interface CartItem extends Product {
  quantity: number;
  total: number;
}

export const getPricePromo = ({ quantity, price, promo: { requiredAmount, priceAmount } }: CartItem) =>
  ((quantity % requiredAmount) + Math.floor(quantity / requiredAmount ) * priceAmount) * price;

export const getPriceDefault = ({ price, quantity}: CartItem) => price * quantity;

export const getPrice = (cartItem: CartItem) => cartItem.promo ? getPricePromo(cartItem) : getPriceDefault(cartItem);
