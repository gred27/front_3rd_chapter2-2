import React from 'react';
import { ProductProvider } from '../../context/ProductContext';
import { CouponProvider } from '../../context/CouponContext';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductProvider>
      <CouponProvider>
        <div className="min-h-screen bg-gray-100">{children}</div>
      </CouponProvider>
    </ProductProvider>
  );
};
