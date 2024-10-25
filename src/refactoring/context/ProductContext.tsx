import { useMemo } from 'react';
import { useProducts } from '../hooks';
import { createContext } from '../lib/create-context';
import { initialProducts } from '../mock';

type IProductContext = ReturnType<typeof useProducts>;

const [ProductContextProvider, useProductContext, ProductContext] = createContext<IProductContext>({
  name: 'Product',
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);
  const contextValue = useMemo(
    () => ({ products, updateProduct, addProduct }),
    [addProduct, products, updateProduct],
  );
  return <ProductContextProvider value={contextValue}>{children}</ProductContextProvider>;
};

export { ProductProvider, useProductContext, ProductContext };
