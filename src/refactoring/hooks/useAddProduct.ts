import { useState } from 'react';
import { Product } from '../../types';

type UpdatedKeyType = keyof Omit<Product, 'id' | 'discounts'>;

interface IUseAddProductProps {
  onProductAdd: (newProduct: Product) => void;
}

export const useAddProduct = ({ onProductAdd }: IUseAddProductProps) => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    discounts: [],
  });

  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setNewProduct({
      name: '',
      price: 0,
      stock: 0,
      discounts: [],
    });
    setShowNewProductForm(false);
  };

  const handleToggleShowNewProductBtn = () => setShowNewProductForm(!showNewProductForm);

  const handleChangeProductForm =
    (updatedKey: UpdatedKeyType) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setNewProduct({ ...newProduct, [updatedKey]: getUpdatedValue(updatedKey, e.target.value) });

  const getUpdatedValue = (key: UpdatedKeyType, value: string) => {
    return key === 'name' ? value : parseInt(value);
  };

  return {
    showNewProductForm,
    newProduct,
    handleToggleShowNewProductBtn,
    handleAddNewProduct,
    handleChangeProductForm,
  };
};
