import { Coupon, Product } from '../../../types';
import { ContentTitle } from '../common/ContentTitle';
import { ContentSubTitle } from '../common/ContentSubTitle';
import { AddNewProductSection } from '../unit/Admin/AddNewProductSection';
import { AddNewCouponSection } from '../unit/Admin/AddNewCouponSection';
import { CouponList } from '../unit/Admin/CouponList';
import { ProductItemEditable } from '../unit/Admin/ProductItemEditable';

interface Props {
  products: Product[];
  coupons: Coupon[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({
  products,
  coupons,
  onProductUpdate,
  onProductAdd,
  onCouponAdd,
}: Props) => {
  return (
    <div className="container mx-auto p-4">
      <ContentTitle title="관리자 페이지" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ContentSubTitle title="상품 관리" />
          <AddNewProductSection onProductAdd={onProductAdd} />

          <div className="space-y-2">
            {products.map((product, index) => (
              <ProductItemEditable
                key={product.id}
                index={index}
                products={products}
                product={product}
                onProductUpdate={onProductUpdate}
              />
            ))}
          </div>
        </div>
        <div>
          <ContentSubTitle title="쿠폰 관리" />
          <div className="bg-white p-4 rounded shadow">
            <AddNewCouponSection onCouponAdd={onCouponAdd} />
            <CouponList coupons={coupons} />
          </div>
        </div>
      </div>
    </div>
  );
};
