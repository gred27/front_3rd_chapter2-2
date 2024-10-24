import { useCallback, useState } from 'react';
import { Product } from '../../types';

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState(initialProducts);
  const updateProduct = useCallback(
    (updatedProduct: Product) =>
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
      ),
    [],
  );

  const addProduct = useCallback((newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }, []);

  return { products, updateProduct, addProduct };
};
