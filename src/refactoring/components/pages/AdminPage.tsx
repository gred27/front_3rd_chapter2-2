import { ContentTitle } from '../common/ContentTitle';
import { AdminManageProduct } from '../widget/AdminManageProduct';
import { AdminManageCoupon } from '../widget/AdminMangeCoupon';

export const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <ContentTitle title="관리자 페이지" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdminManageProduct />
        <AdminManageCoupon />
      </div>
    </div>
  );
};
