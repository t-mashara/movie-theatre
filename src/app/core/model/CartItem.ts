import {Product} from './Product';

export interface CartItem extends Product {
  quantity: number;
}

export const getPricePromo = ({ price, promo: { requiredAmount, priceAmount } }: CartItem) =>
  ((this.quantity % requiredAmount) + Math.floor(this.quantity / requiredAmount ) * priceAmount) * price;

export const getPriceDefault = ({ price, quantity}: CartItem) => price * quantity;

export const getPrice = (cartItem: CartItem) => cartItem.promo ? getPricePromo(cartItem) : getPriceDefault(cartItem);
