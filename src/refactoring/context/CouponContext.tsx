import { useMemo } from 'react';
import { useCoupons } from '../hooks';
import { createContext } from '../lib/create-context';
import { initialCoupons } from '../mock';

type ICouponContext = ReturnType<typeof useCoupons>;

const [CouponContextProvider, useCouponContext, CouponContext] = createContext<ICouponContext>({
  name: 'Coupon',
});

const CouponProvider = ({ children }: { children: React.ReactNode }) => {
  const { coupons, addCoupon } = useCoupons(initialCoupons);
  const contextValue = useMemo(() => ({ coupons, addCoupon }), [addCoupon, coupons]);
  return <CouponContextProvider value={contextValue}>{children}</CouponContextProvider>;
};

export { CouponProvider, useCouponContext, CouponContext };
