import { actionType } from './actionTypes';

export const initialState = {
  loading: false,
  product: [],
  category: '',
  cart: [],
  error: false,

  searchedWord: '',
  displayProduct: [],
};
export const ProductReducer = (state, action) => {
  switch (action.type) {
    case actionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionType.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: false,
      };
    case actionType.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionType.ADD_TO_CART:
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (selectedProduct) {
        console.log(selectedProduct);
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload.id),
        ],
      };
    case actionType.FETCHING_CATEGORY_PRODUCTS:
      console.log(action.payload.category);

      return {
        ...state,
        category: action.payload.category,
      };
    case actionType.FETCHING_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedWord: action.payload.searchText,
      };
    case actionType.FETCHING_DISPLAY_PRODUCTS:
      return {
        ...state,
        loading: false,
        displayProduct: action.payload,
        error: false,
      };
    default:
      return state;
  }
};
