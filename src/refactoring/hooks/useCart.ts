// useCart.ts
import { useCallback, useState } from 'react';
import { CartItem, Coupon, Product } from '../../types';
import { calculateCartTotal, getCartItemById, updateCartItemQuantity } from './utils/cartUtils';
import { getRemainingStock } from './utils/productUtils';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const addToCart = useCallback(
    (product: Product) => {
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
    },
    [cart],
  );

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
    setCart((prevCart) => updateCartItemQuantity(prevCart, productId, newQuantity));
  }, []);

  const applyCoupon = useCallback((coupon: Coupon) => {
    setSelectedCoupon(coupon);
  }, []);

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
