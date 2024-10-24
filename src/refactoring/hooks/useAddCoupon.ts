import { useCallback, useState } from 'react';
import { Coupon } from '../../types';

type UpdatedKeyType = keyof Coupon;

export const useAddCoupon = () => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const initializeNewCoupon = useCallback(
    () =>
      setNewCoupon({
        name: '',
        code: '',
        discountType: 'percentage',
        discountValue: 0,
      }),
    [],
  );

  const handleChangeCouponForm = useCallback(
    (updatedKey: UpdatedKeyType) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setNewCoupon({ ...newCoupon, [updatedKey]: getUpdatedValue(updatedKey, e.target.value) }),
    [newCoupon],
  );

  const getUpdatedValue = (key: UpdatedKeyType, value: string) => {
    return key !== 'discountValue' ? value : parseInt(value);
  };
  return {
    newCoupon,
    initializeNewCoupon,
    handleChangeCouponForm,
  };
};
