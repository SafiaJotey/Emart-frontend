import React from 'react';

const Product = (props) => {
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
        <h6 className="text-lg text-primary font-bold">Price: $ {price}</h6>
        <span className="text-md text-primary font-bold">
          {' '}
          {ratings} ({ratingsCount})
        </span>
        <br />
        <small className="text-sm text-secondary">
          only {stock} left in stock
        </small>
        <br />
        <button
          className="px-5 py-2 my-2 rounded-lg bg-primary font-bold"
          onClick={() => props.handleProduct(props.product)}
        >
          {' '}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
