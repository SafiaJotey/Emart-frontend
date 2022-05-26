import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';

const Product = (props) => {
  const [count, setCount] = useState(1);

  const {
    category,
    id,
    img,
    name,
    price,
    ratings,
    ratingsCount,
    seller,
    stock,
  } = props.product;
  const [totalPrice, setTotalPrice] = useState(price);
  const handleQuantity = (isIncreasing) => {
    let newPrice;
    const select = document.getElementById(id);
    let quantity = parseInt(select.value);
    if (isIncreasing) {
      quantity = quantity + 1;
    } else if (quantity > 1) {
      quantity = quantity - 1;
    }
    setCount(quantity);
    newPrice = quantity * price;
    setTotalPrice(newPrice);
  };

  props.product.quantity = count;

  return (
    <div className="flex flex-col justify-center items-center  md:flex-row   p-2 border-b-2 border-b-secondary-200">
      <div className="image w-full md:w-1/3 ">
        <img src={img} alt="product" />
      </div>
      <div className="details w-full md:w-2/3 text-justify md:text-left py-5 px-2 md:px-5">
        <h2 className="text-2xl text-primary font-bold">
          {' '}
          Product Name: {name}
        </h2>
        <p className="text-lg font-bold">Category: {category}</p>
        <small className="text-sm text-secondary">ID: {id}</small>
        <p className="text-lg">By: {seller}</p>
        <h6 className="text-lg text-primary font-bold">
          Price: $ {totalPrice}
        </h6>
        <div className="flex justify-between items-center">
          <p className="text-sm text-secondary">only {stock} left in stock</p>
          <div className="flex justify-end items-center">
            {' '}
            <p className="text-md text-primary font-bold">
              {' '}
              <Rating
                initialRating={ratings}
                readonly
                emptySymbol={<FiStar />}
                fullSymbol={<AiTwotoneStar />}
              />
            </p>
            <p className="text-md text-primary font-bold">({ratingsCount})</p>
          </div>
        </div>
        <br />
        <div>
          <p className="font-xs text-secondary">select quantity</p>
          <button
            className="p-2 bg-slate-50 rounded-sm"
            onClick={() => handleQuantity(true)}
          >
            <AiOutlinePlus />
          </button>
          <input
            type="text"
            className="w-1/12 p-2 text-center mx-2"
            id={id}
            min={1}
            value={count}
          />
          <button
            className="p-2 bg-slate-50 rounded-sm"
            onClick={() => handleQuantity(false)}
          >
            <AiOutlineMinus />
          </button>
        </div>

        <br />
        <button
          className="px-5 py-2 rounded-lg bg-primary font-bold"
          onClick={() => props.handleProduct(props.product)}
        >
          {' '}
          <div className="flex justify-between items-center">
            <FaShoppingCart /> <h5>Add to cart</h5>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
