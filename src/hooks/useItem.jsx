import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';

const useItem = () => {
  return useContext(ProductContext);
};

export default useItem;
