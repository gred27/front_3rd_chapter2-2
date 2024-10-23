import { useState } from 'react';
import { Coupon } from '../../types';

type UpdatedKeyType = keyof Coupon;

export const useAddCoupon = ({ onCouponAdd }: { onCouponAdd: (newCoupon: Coupon) => void }) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const handleAddCoupon = () => {
    onCouponAdd(newCoupon);
    setNewCoupon({
      name: '',
      code: '',
      discountType: 'percentage',
      discountValue: 0,
    });
  };

  const handleChangeCouponForm =
    (updatedKey: UpdatedKeyType) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setNewCoupon({ ...newCoupon, [updatedKey]: getUpdatedValue(updatedKey, e.target.value) });

  const getUpdatedValue = (key: UpdatedKeyType, value: string) => {
    return key !== 'discountValue' ? value : parseInt(value);
  };
  return {
    newCoupon,
    handleAddCoupon,
    handleChangeCouponForm,
  };
};
