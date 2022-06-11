import { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../utilities/fakedb';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displaProducts, setDisplayProducts] = useState([]);
  const handleProduct = (product) => {
    const exist = cart.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd._id !== product._id);

      exist.quantity = exist.quantity + 1;

      newCart = [...rest, exist];
    } else {
      console.log(false);
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product._id);
    console.log('cart', cart);
  };

  useEffect(() => {
    if (products.length) {
      const storeCart = [];
      const saveCart = getStoreCart();

      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);
        const quantity = saveCart[key];
        addedProduct.quantity = quantity;
        storeCart.push(addedProduct);
      }
      setCart(storeCart);
    }
  }, [products]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

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
