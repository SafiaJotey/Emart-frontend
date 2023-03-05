import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';

import { FaShoppingCart } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useItem } from '../../context/ProductProvider';
const ProductGridCard = ({ product }) => {
  const {
    handleProduct,

    handleQuantity,
  } = useItem();
  return (
    <div className="w-full md:w-1/3 md:p-1 ">
      <div className="shadow-lg px-3  border-0 rounded-lg ">
        {' '}
        <img className="  border-2 rounded " src={product.img} alt="product" />
        <div className="min-h-[160px]">
          <small className=" text-primary font-bold text-md">
            {product.name}
          </small>
          <br />
          <small className=" text-primary fw-bold p-1">
            {product.category}
          </small>
          <small className="pl-5 text-peimary text-lg">${product.price}</small>

          <div className="flex flex-row justify-between items-center">
            {' '}
            <p className="text-lg text-reviewColor font-bold  ">
              {' '}
              <Rating
                initialRating={product.ratings}
                readonly
                emptySymbol={<FiStar />}
                fullSymbol={<AiTwotoneStar />}
              />
            </p>
            <p
              className="text-md text-primary 
          font-bold"
            >
              ({product.ratingsCount})
            </p>
          </div>
          <div className="my-1">
            <p className="font-xs text-primary">select quantity</p>
            <div>
              <button
                className="p-1 text-primary rounded-sm"
                onClick={() => handleQuantity(true, product)}
              >
                <AiOutlinePlus />
              </button>
              <input
                type="text"
                className="w-1/6 text-center mx-2"
                id={product.id}
                min={1}
                value="1"
              />
              <button
                className="p-1  text-primary rounded-sm"
                onClick={() => handleQuantity(false, product)}
              >
                <AiOutlineMinus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 "
            onClick={() => handleProduct(product)}
          >
            {' '}
            <div className="flex justify-between text-white items-center text-lg">
              <FaShoppingCart />
            </div>
          </button>
          <div>
            <Link
              to={`/product/${product._id}`}
              className="text-secondary  font-bold text-sm"
            >
              View product{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
