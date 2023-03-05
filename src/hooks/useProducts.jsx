import { useEffect, useReducer, useState } from 'react';
import { actionType } from '../state/ProductState/actionTypes';
import {
  initialState,
  ProductReducer,
} from '../state/ProductState/ProductReducer';
import { addToDb, getStoreCart, removeFromDb } from '../utilities/fakedb';

const useProducts = () => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  let countQuantity = 0;
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(false);
  const [category, setCategory] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [displaProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [productByCategory, setProductByCategory] = useState([]);
  const [mostDemanding, setMostDemanding] = useState([]);

  useEffect(() => {
    fetch('https://emart-98vu.onrender.com/api/v1/product/getPopularProduct')
      .then((res) => res.json())
      .then((data) => {
        setMostDemanding(data.data);
      });
  }, []);

  const handleProduct = (product, count) => {
    const select = document.getElementById(product.id);

    countQuantity = parseInt(select.value);
    console.log(countQuantity);
    const exist = cart?.find((pd) => pd._id === product._id);

    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd._id !== product._id);

      exist.quantity = exist.quantity + countQuantity;

      newCart = [...rest, exist];
    } else {
      product.quantity = countQuantity;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product._id, countQuantity);
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
      `https://emart-98vu.onrender.com/api/v1/product/getProduct?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data.product);
        setDisplayProducts(data.data.product);

        const pageNummber = Math.ceil(data.data.total / 9);
        setPageCount(pageNummber);
      });
  }, [page]);

  const handleRemove = (productId) => {
    const newCart = cart.filter((product) => product._id !== productId);
    setCart(newCart);
    removeFromDb(productId);
  };
  const handleQuantity = (isIncreasing, product) => {
    const select = document.getElementById(product.id);

    countQuantity = parseInt(select.value);

    if (isIncreasing) {
      countQuantity = countQuantity + 1;

      select.value = countQuantity;
      // setCount(countQuantity);
    } else if (!isIncreasing) {
      if (countQuantity > 1) {
        countQuantity = countQuantity - 1;

        select.value = countQuantity;
      }
    }
    // setCount(select.value);
    product.quantity = countQuantity;
    select.value = countQuantity;
  };

  useEffect(() => {
    dispatch({ type: actionType.FETCHING_START });
    fetch('https://emart-98vu.onrender.com/api/v1/product/getProduct')
      .then((res) => res.json())
      .then((data) => {
        setProductByCategory(data.data.product);
        dispatch({
          type: actionType.FETCHING_SUCCESS,
          payload: data.data.product,
        });
        setAllProducts(data.data.product);
      })
      .catch(() => {
        dispatch({ type: actionType.FETCHING_ERROR });
      });
  }, [category]);

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
    productByCategory,
    mostDemanding,
    pageCount,
    cartQuantity,
    setCartQuantity,
    totalPrice,
    setTotalPrice,
    page,
    setPage,
    category,
    setCategory,
    grid,
    setGrid,
    state,
    dispatch,
  };
};

export default useProducts;
