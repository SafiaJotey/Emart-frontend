import { useEffect, useState } from 'react';
import { addToDb, getStoreCart, removeFromDb } from '../utilities/fakedb';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [displaProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 8;
  const handleProduct = (product) => {
    const exist = cart.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd._id !== product._id);

      exist.quantity = exist.quantity + count;

      newCart = [...rest, exist];
    } else {
      product.quantity = count;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product._id, count);
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
  const handleQuantity = (isIncreasing, product) => {
    console.log(isIncreasing, product);
    const select = document.getElementById(product.id);
    let quantity = parseInt(select.value);
    console.log(quantity);

    if (isIncreasing) {
      quantity = quantity + 1;
    } else if (quantity > 1) {
      quantity = quantity - 1;
    }
    setCount(quantity);
    product.quantity = count;
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
    handleQuantity,
    count,
    pageCount,
    cartQuantity,
    setCartQuantity,
    totalPrice,
    setTotalPrice,
    page,
    setPage,
  };
};

export default useProducts;
