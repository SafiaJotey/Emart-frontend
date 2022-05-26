import React, { useEffect, useState } from 'react';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displaProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleRemove = (product) => {
    console.log('clicked');
  };
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProduct);
  };

  return (
    <div>
      <div className="bg-secondary p-2">
        <input
          className="w-full md:w-3/5 p-2 rounded-sm "
          type="text"
          placeholder="Search by name"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col-reverse  md:flex-row  md: justify-center   w-100  px-0 md:px-20 ">
        <div className="product-container md:border-r-secondary-200 md:border-r-2 w-full md:w-2/3">
          {displaProducts.length === 0 ? (
            <div>
              <p>No products found.</p>
            </div>
          ) : (
            displaProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleProduct={handleProduct}
              />
            ))
          )}
        </div>
        <div className="order-container w-full md:w-1/3 bg-slate-50">
          <Cart cart={cart} handleRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
