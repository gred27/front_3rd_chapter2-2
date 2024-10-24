import { useCallback } from 'react';

import { useAddProduct } from '../../../hooks/useAddProduct';
import { useProductContext } from '../../../context/ProductContext';

export const AddNewProductSection = () => {
  const { addProduct } = useProductContext();

  const {
    showNewProductForm,
    newProduct,
    initializeNewProduct,
    handleToggleShowNewProductBtn,
    handleChangeProductForm,
  } = useAddProduct();

  const handleAddNewProduct = useCallback(() => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    addProduct(productWithId);
    initializeNewProduct();
  }, [initializeNewProduct, newProduct, addProduct]);

  return (
    <>
      <button
        onClick={handleToggleShowNewProductBtn}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? '취소' : '새 상품 추가'}
      </button>
      {showNewProductForm && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
          <div className="mb-2">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              상품명
            </label>
            <input
              id="productName"
              type="text"
              value={newProduct.name}
              onChange={handleChangeProductForm('name')}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
              가격
            </label>
            <input
              id="productPrice"
              type="number"
              value={newProduct.price}
              onChange={handleChangeProductForm('price')}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">
              재고
            </label>
            <input
              id="productStock"
              type="number"
              value={newProduct.stock}
              onChange={handleChangeProductForm('stock')}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleAddNewProduct}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            추가
          </button>
        </div>
      )}
    </>
  );
};
