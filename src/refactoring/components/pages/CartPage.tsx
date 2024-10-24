import { useCallback } from 'react';
import { Product } from '../../../types';
import { useCart } from '../../hooks/index';

import { ContentSubTitle } from '../common/ContentSubTitle';
import { ContentTitle } from '../common/ContentTitle';
import { ProductItemCard } from '../unit/cart/ProductItemCard';
import { CartItemUnit } from '../unit/cart/CartItemUnit';
import { CouponSelect } from '../unit/cart/CouponSelect';
import { TotalPriceSummary } from '../unit/cart/TotalPriceSummary';
import { useCouponContext } from '../../context/CouponContext';
import { useProductContext } from '../../context/ProductContext';

export const CartPage = () => {
  const { coupons } = useCouponContext();
  const { products } = useProductContext();
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon,
  } = useCart();

  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } = calculateTotal();

  // TODO: refactoring
  const handleClickAddToCartBtn = useCallback(
    (product: Product) => addToCart(product),
    [addToCart],
  );

  return (
    <div className="container mx-auto p-4">
      <ContentTitle title="장바구니" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ContentSubTitle title="상품 목록" />
          <div className="space-y-2">
            {products.map((product) => {
              return (
                <ProductItemCard
                  key={product.id}
                  cart={cart}
                  product={product}
                  onClick={() => handleClickAddToCartBtn(product)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <ContentSubTitle title="장바구니 내역" />
          <div className="space-y-2">
            {cart.map((item) => {
              return (
                <CartItemUnit
                  key={item.product.id}
                  item={item}
                  onClickUpdate={updateQuantity}
                  onClickRemove={removeFromCart}
                />
              );
            })}
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
            <CouponSelect
              coupons={coupons}
              onChange={applyCoupon}
              selectedCoupon={selectedCoupon}
            />
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">주문 요약</h2>
            <TotalPriceSummary
              totalAfterDiscount={totalAfterDiscount}
              totalBeforeDiscount={totalBeforeDiscount}
              totalDiscount={totalDiscount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
