import { useCallback } from 'react';
import { Coupon, Product } from '../../../types';
import { useCart } from '../../hooks/index';

import { ContentSubTitle } from '../common/ContentSubTitle';
import { ContentTitle } from '../common/ContentTitle';
import { ProductItemCard } from '../unit/product/productItemCard';
import { CartItemUnit } from '../unit/cart/CartItemUnit';
import { CouponSelect } from '../unit/\bCouponSelect';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
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
            <div className="space-y-1">
              <p>상품 금액: {totalBeforeDiscount.toLocaleString()}원</p>
              <p className="text-green-600">할인 금액: {totalDiscount.toLocaleString()}원</p>
              <p className="text-xl font-bold">
                최종 결제 금액: {totalAfterDiscount.toLocaleString()}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
