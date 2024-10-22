import { CartItem, Product } from '../../../types';

export const getRemainingStock = (product: Product, cartItem?: CartItem) => {
  return product.stock - (cartItem?.quantity || 0);
};
