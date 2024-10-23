import { Coupon } from '../../../types';

interface ICouponSelect {
  coupons: Coupon[];
  onChange: (coupon: Coupon) => void;
  selectedCoupon: Coupon | null;
}

export const CouponSelect = ({ coupons, onChange, selectedCoupon }: ICouponSelect) => {
  return (
    <>
      <select
        onChange={(e) => onChange(coupons[parseInt(e.target.value)])}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">쿠폰 선택</option>
        {coupons.map((coupon, index) => (
          <option key={coupon.code} value={index}>
            {coupon.name} -{' '}
            {coupon.discountType === 'amount'
              ? `${coupon.discountValue}원`
              : `${coupon.discountValue}%`}
          </option>
        ))}
      </select>
      {selectedCoupon && (
        <p className="text-green-600">
          적용된 쿠폰: {selectedCoupon.name}(
          {selectedCoupon.discountType === 'amount'
            ? `${selectedCoupon.discountValue}원`
            : `${selectedCoupon.discountValue}%`}{' '}
          할인)
        </p>
      )}
    </>
  );
};
