import React from 'react';
import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import Search from '../../components/Search/Search';
import ProductProvider from '../../context/ProductProvider';

const Shop = () => {
  return (
    <ProductProvider>
      <Search></Search>
      <div className="flex flex-col-reverse  md:flex-row  md: justify-center   w-100  px-0 md:px-20 ">
        <Product></Product>
        <Cart></Cart>
      </div>
    </ProductProvider>
  );
};

export default Shop;
