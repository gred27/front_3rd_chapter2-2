import { useProductContext } from '../../context/ProductContext';
import { ContentSubTitle } from '../common/ContentSubTitle';
import { AddNewProductSection } from '../unit/Admin/AddNewProductSection';
import { ProductItemEditable } from '../unit/Admin/ProductItemEditable';

export const AdminManageProduct = () => {
  const { products } = useProductContext();
  return (
    <div>
      <ContentSubTitle title="상품 관리" />
      <AddNewProductSection />
      <div className="space-y-2">
        {products.map((product, index) => (
          <ProductItemEditable key={product.id} index={index} product={product} />
        ))}
      </div>
    </div>
  );
};
