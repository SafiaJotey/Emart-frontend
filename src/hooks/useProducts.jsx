import { useEffect, useReducer, useState } from 'react';
import {
  ProductReducer,
  initialState,
} from '../state/ProductState/ProductReducer';
import { actionType } from '../state/ProductState/actionTypes';
import { addToDb, getStoreCart, removeFromDb } from '../utilities/fakedb';

const useProducts = () => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  let countQuantity = 0;

  const [grid, setGrid] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [displaProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  let newCart = [];
  const handleProduct = (product, count) => {
    const select = document.getElementById(product.id);

    countQuantity = parseInt(select.value);
    console.log(countQuantity);

    const exist = cart?.find((pd) => pd._id === product._id);
    console.log(exist);

    if (exist) {
      const rest = cart.filter((pd) => pd._id !== product._id);
      console.log(exist.quantity);

      exist.quantity = exist.quantity + countQuantity;
      console.log(exist.quantity);
      newCart = [...rest, exist];
      console.log(newCart);
      setCart(newCart);
      product.addedToCart = true;
    } else {
      product.quantity = countQuantity;

      product.addedToCart = true;
      newCart = [...cart, product];
    }

    addToDb(product._id, countQuantity);
    setCart(newCart);
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
    dispatch({ type: actionType.FETCHING_START });
    fetch(
      `https://emart-98vu.onrender.com/api/v1/product/getProduct?page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        // // setProducts(data.data.product);
        // console.log(data.data.product);
        dispatch({
          type: actionType.FETCHING_DISPLAY_PRODUCTS,
          payload: data.data.product,
        });
        const pageNummber = Math.ceil(data.data.total / 9);
        setPageCount(pageNummber);
      })
      .catch(() => {
        dispatch({ type: actionType.FETCHING_ERROR });
      });
  }, [page]);

  const handleRemove = (productId, product) => {
    const newCart = cart.filter((product) => product._id !== productId);

    setCart(newCart);
    removeFromDb(productId);
    product.addedToCart = false;
  };
  const handleQuantity = (isIncreasing, product) => {
    const select = document.getElementById(product.id);
    let countQuantity = parseInt(select.value);

    if (isIncreasing) {
      countQuantity = countQuantity + 1;
    } else if (!isIncreasing) {
      if (countQuantity > 1) {
        countQuantity = countQuantity - 1;
      }
    }

    product.quantity = countQuantity; // Update product.quantity

    select.value = countQuantity; // Update the value in the select input
  };

  useEffect(() => {
    dispatch({ type: actionType.FETCHING_START });
    fetch('https://emart-98vu.onrender.com/api/v1/product/getProduct')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionType.FETCHING_SUCCESS,
          payload: data.data.product,
        });
        setAllProducts(data.data.product);
      })
      .catch(() => {
        dispatch({ type: actionType.FETCHING_ERROR });
      });
  }, [state.category]);

  const handleSearch = (e) => {
    dispatch({
      type: actionType.FETCHING_SEARCHED_PRODUCTS,
      payload: { searchText: e.target.value },
    });
  };

  return {
    cart,
    displaProducts,
    allProducts,
    handleProduct,
    handleSearch,
    handleRemove,
    handleQuantity,

    pageCount,

    totalPrice,
    setTotalPrice,
    page,
    setPage,

    grid,
    setGrid,
    state,
    dispatch,
  };
};

export default useProducts;
