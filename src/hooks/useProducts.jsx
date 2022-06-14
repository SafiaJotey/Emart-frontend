import { useEffect, useState } from 'react';
import { addToDb, getStoreCart, removeFromDb } from '../utilities/fakedb';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [displaProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 8;
  const handleProduct = (product) => {
    const exist = cart.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd._id !== product._id);

      exist.quantity = exist.quantity + 1;

      newCart = [...rest, exist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    if (allProducts.length) {
      const storeCart = [];
      const saveCart = getStoreCart();

      for (const key in saveCart) {
        const addedProduct = allProducts.find((product) => product._id === key);
        const quantity = saveCart[key];
        addedProduct.quantity = quantity;
        storeCart.push(addedProduct);
      }
      setCart(storeCart);
    }
  }, [allProducts]);

  useEffect(() => {
    fetch(
      `https://afternoon-gorge-26422.herokuapp.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);

        const pageNummber = Math.ceil(data.count / 8);
        setPageCount(pageNummber);
      });
  }, [page]);

  const handleRemove = (productId) => {
    console.log('cart', cart);
    console.log('id', productId);
    const newCart = cart.filter((product) => product._id !== productId);
    setCart(newCart);
    removeFromDb(productId);
  };
  useEffect(() => {
    fetch('https://afternoon-gorge-26422.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      });
  }, []);
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProduct = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProduct);
  };
  return {
    products,
    cart,
    displaProducts,
    allProducts,
    handleProduct,
    handleSearch,
    handleRemove,
    pageCount,
    cartQuantity,
    setCartQuantity,

    page,
    setPage,
  };
};

export default useProducts;
