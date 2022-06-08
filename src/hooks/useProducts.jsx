import { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../utilities/fakedb';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displaProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const saveCart = getStoreCart();
      console.log(saveCart);
      const storeCart = [];

      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);

        addedProduct.quantity = saveCart[key];
        storeCart.push(addedProduct);
      }
      setCart(storeCart);
    }
  }, [products]);
  const handleProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
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
  return {
    products,
    cart,
    displaProducts,
    handleProduct,
    handleSearch,
    handleRemove,
  };
};

export default useProducts;
