import { CartItem, Product } from '../../../types';

export const getRemainingStock = (product: Product, cartItem?: CartItem) => {
  return product.stock - (cartItem?.quantity || 0);
};

export const getMaxDiscount = (discounts: { quantity: number; rate: number }[]) => {
  return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};
