import React from 'react';
import { Link } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import Cart from '../Cart/Cart';

import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';

const CategoryProducts = () => {
  const { cart, productByCategory, category, handleProduct, handleQuantity } =
    useItem();

  const CategoryProducts = productByCategory.filter(
    (product) => product.category === category
  );

  return (
    <div className="w-full md:w-10/12 ">
      {' '}
      <div className="  w-100  px-0 md:px-4 ">
        <h2 className="my-1 text-4xl font-bold bg-black text-white p-2 text-center ">
          {category}
        </h2>
        <div className="flex flex-col-reverse  md:flex-row  md: justify-center    ">
          <div className="flex flex-col justify-center items-center w-full md:w-2/3">
            {CategoryProducts.map((product) => (
              <>
                <div className="flex flex-col justify-center items-center  md:flex-row   p-1 border-b-2 border-b-secondary-200">
                  <div className="image w-full md:w-3/12 ">
                    <img src={product.img} alt="product" />
                  </div>
                  <div className="details w-full md:w-2/3 text-justify md:text-left py-5 px-2 md:px-5">
                    <h2 className="text-md md:text-lg text-primary font-bold">
                      {' '}
                      Product Name: {product.name}
                    </h2>
                    <p className="text-sm font-bold">
                      Category: {product.category}
                    </p>
                    {/* <small className="text-sm text-secondary">
                    ID: {product.id}
                  </small>
                  <p className="text-lg">By: {product.seller}</p> */}

                    <div className="flex  flex-col md:flex-row  items-start justify-start md:justify-between md:items-center">
                      <h6 className="text-lg text-primary font-bold">
                        Price: $ {product.price}
                      </h6>
                      <div className="flex flex-col md:flex-row justify-end items-center">
                        {' '}
                        <p className="text-md text-reviewColor font-bold ">
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
                    </div>
                    <div className="my-1">
                      <p className="font-xs text-secondary">select quantity</p>
                      <button
                        className="p-2 bg-shape rounded-sm"
                        onClick={() => handleQuantity(true, product)}
                      >
                        <AiOutlinePlus />
                      </button>
                      <input
                        type="text"
                        className="w-1/12 p-2 text-center mx-2"
                        id={product.id}
                        min={1}
                        value="1"
                      />
                      <button
                        className="p-2 bg-shape rounded-sm"
                        onClick={() => handleQuantity(false, product)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 "
                        onClick={() => handleProduct(product)}
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
              </>
            ))}
          </div>

          <div className="order-container w-full md:w-1/3 bg-shape">
            <Cart key={cart.id}>
              <Link to="order">
                <button className="px-8 py-2 text-white  rounded-lg bg-primary text-sm font-bold my-4">
                  Preview Order
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
