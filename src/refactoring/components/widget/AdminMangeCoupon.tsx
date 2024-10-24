import { useCouponContext } from '../../context/CouponContext';
import { ContentSubTitle } from '../common/ContentSubTitle';
import { AddNewCouponSection } from '../unit/Admin/AddNewCouponSection';
import { CouponList } from '../unit/Admin/CouponList';

export const AdminManageCoupon = () => {
  const { coupons } = useCouponContext();
  return (
    <div>
      <ContentSubTitle title="쿠폰 관리" />
      <div className="bg-white p-4 rounded shadow">
        <AddNewCouponSection />
        <CouponList coupons={coupons} />
      </div>
    </div>
  );
};
