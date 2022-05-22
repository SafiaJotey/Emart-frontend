import React, { useEffect, useState } from 'react';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="flex flex-col-reverse  md:flex-row  md: justify-center   w-100  px-0 md:px-20 ">
      <div className="product-container md:border-r-secondary-200 md:border-r-2 w-full md:w-2/3">
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleProduct={handleProduct}
          />
        ))}
      </div>
      <div className="order-container w-full md:w-1/3 bg-slate-50">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
