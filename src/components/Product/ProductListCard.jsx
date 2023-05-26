import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';

import { FaShoppingCart } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useItem } from '../../context/ProductProvider';
const ProductListCard = ({ product }) => {
  const { dispatch, handleQuantity, handleProduct } = useItem();
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center  md:flex-row   p-1 border-b-2 border-b-secondary-200">
        <div className="image w-full md:w-3/12 ">
          <img src={product.img} alt="product" />
        </div>
        <div className="details w-full md:w-2/3 text-justify md:text-left py-5 px-2 md:px-5">
          <h2 className="text-md md:text-lg text-primary font-bold text-xs">
            {' '}
            Product Name: {product.name}
          </h2>
          <p className="text-xs ">Category: {product.category}</p>
          {/* <small className="text-sm text-secondary">
            ID: {product.id}
          </small>
          <p className="text-lg">By: {product.seller}</p> */}

          <div className="flex  flex-col md:flex-row  items-start justify-start md:justify-between md:items-center">
            <h6 className="text-xs text-primary ">Price: $ {product.price}</h6>
            <div className="flex flex-col md:flex-row justify-end items-center">
              {' '}
              <p className="text-md text-reviewColor text-xs  ">
                {' '}
                <Rating
                  initialRating={product.ratings}
                  readonly
                  emptySymbol={<FiStar />}
                  fullSymbol={<AiTwotoneStar />}
                />
              </p>
              <p
                className="text-xs text-primary 
            font-bold"
              >
                ({product.ratingsCount})
              </p>
            </div>
          </div>
          <div className="my-1">
            <p className="font-xs text-secondary">select quantity</p>
            <button
              className={`${
                product.addedToCart ? ' bg-gray-300 ' : ' bg-white '
              } p-1 text-black rounded-sm shadow-md`}
              onClick={() => handleQuantity(true, product)}
              disabled={product.addedToCart}
            >
              <AiOutlinePlus className="text-xs" />
            </button>
            <input
              type="text"
              className="w-1/6 text-center mx-2"
              id={product.id}
              min={1}
              value={product.quantity ? product.quantity : 1}
            />
            <button
              className={`${
                product.addedToCart ? ' bg-gray-300 ' : ' bg-white '
              } p-1 text-black rounded-sm shadow-md`}
              onClick={() => handleQuantity(false, product)}
              disabled={product.addedToCart}
            >
              <AiOutlineMinus className="text-xs" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <button
              className={`{${
                !product.addedToCart
                  ? ' bg-primary text-sm '
                  : ' bg-gray-300 text-sm '
              }} px-5 py-2 rounded- font-bold my-2`}
              onClick={() => handleProduct(product)}
              disabled={product.addedToCart}
            >
              {' '}
              <div className="flex justify-between text-white items-center">
                <FaShoppingCart /> <h5>Add to cart</h5>
              </div>
            </button>
            <div>
              <Link
                to={`/product/${product._id}`}
                className="text-secondary  font-bold "
              >
                View product{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
