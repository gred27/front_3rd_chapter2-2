import { useCallback, useState } from 'react';
import { CartPage } from './components/pages/CartPage';
import { AdminPage } from './components/pages/AdminPage';

import { Gnb } from './components/layout/Gnb';
import { MainContent } from './components/layout/MainContent';
import { ProductProvider } from './context/ProductContext';
import { CouponProvider } from './context/CouponContext';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const handleClickToggleBtn = useCallback(() => setIsAdmin((prevState) => !prevState), []);

  return (
    <ProductProvider>
      <CouponProvider>
        <div className="min-h-screen bg-gray-100">
          <Gnb isAdmin={isAdmin} onClick={handleClickToggleBtn} />
          <MainContent>
            {isAdmin ? (
              <AdminPage
                products={products}
                coupons={coupons}
                onProductUpdate={updateProduct}
                onProductAdd={addProduct}
                onCouponAdd={addCoupon}
              />
            ) : (
              <CartPage products={products} coupons={coupons} />
            )}
          </MainContent>
        </div>
      </CouponProvider>
    </ProductProvider>
  );
};

export default App;
