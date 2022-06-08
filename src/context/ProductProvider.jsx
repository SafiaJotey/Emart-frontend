import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const productsContext = useProducts();

  return (
    <ProductContext.Provider value={productsContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
