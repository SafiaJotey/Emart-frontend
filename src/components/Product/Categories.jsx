import React from 'react';
import { useItem } from '../../context/ProductProvider';
import { actionType } from '../../state/ProductState/actionTypes';

const Categories = () => {
  const { dispatch } = useItem();
  return (
    <div className="hidden md:block m-1 w-2/12 ">
      <div className="md:sticky md:top-14">
        <div className="bg-primary   text-white text-center py-3">
          {' '}
          Sort By Category
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-primary"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: "Men's Sneaker" },
            })
          }
        >
          Men's Sneaker
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: "Men's Pants" },
            })
          }
        >
          Men's Pants
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: "Men's Boot" },
            })
          }
        >
          Men's Boot
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: "Men's T-Shirt" },
            })
          }
        >
          Men's T-Shirt
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: 'Bag' },
            })
          }
        >
          Bag
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: 'Cap' },
            })
          }
        >
          Cap
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: 'Earphones' },
            })
          }
        >
          Earphones
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: 'Bottle' },
            })
          }
        >
          Bottle
        </div>
        <div
          className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
          onClick={() =>
            dispatch({
              type: actionType.FETCHING_CATEGORY_PRODUCTS,
              payload: { category: '' },
            })
          }
        >
          Go to home
        </div>
      </div>
    </div>
  );
};

export default Categories;
