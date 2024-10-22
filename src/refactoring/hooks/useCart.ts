// useCart.ts
import { useState } from 'react';
import { CartItem, Coupon, Product } from '../../types';
import { calculateCartTotal, getCartItemById, updateCartItemQuantity } from './utils/cartUtils';
import { getRemainingStock } from './utils/productUtils';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const addToCart = (product: Product) => {
    const currentCartItem = getCartItemById(cart, product.id);
    const remainingStock = getRemainingStock(product, currentCartItem);
    if (remainingStock <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item,
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) => updateCartItemQuantity(prevCart, productId, newQuantity));
  };

  const applyCoupon = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
  };

  // const calculateTotal = () => ({
  //   totalBeforeDiscount: 0,
  //   totalAfterDiscount: 0,
  //   totalDiscount: 0,
  // });

  const calculateTotal = () => calculateCartTotal(cart, selectedCoupon);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  };
};
