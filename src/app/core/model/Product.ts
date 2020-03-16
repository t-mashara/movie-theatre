export interface Promotion {
  requiredAmount: number;
  priceAmount: number;
}

export interface Product {
  id?: string;
  name: string;
  price: number;
  promo?: Promotion;
}
