import React, { createContext, useContext } from 'react';
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
export const useItem = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
