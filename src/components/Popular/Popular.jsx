import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';

const Popular = () => {
  const { mostDemanding } = useProducts();
  const navigate = useNavigate();
  // const randomProduct = mostDemanding
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 3);
  const handleView = (e, id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="">
      {mostDemanding.slice(0, 3).map((product) => {
        return (
          <div
            onClick={(e) => handleView(e, product._id)}
            className="flex  justify-center items-center my-1 shadow-sm cursor-pointer"
          >
            <div className=" text-primary w-9/12">
              <small className="text-xs p-1 ">{product.name}</small>
              <p className="text-xs font-bold">
                {product.category} at only{' '}
                <span className="text-secondary"> ${product.price}</span>
              </p>
              <p className="text-md text-reviewColor text-xs font-bold  ">
                {' '}
                <Rating
                  initialRating={product.ratings}
                  readonly
                  emptySymbol={<FiStar />}
                  fullSymbol={<AiTwotoneStar />}
                />
              </p>
            </div>
            <img
              src={product.img}
              className="w-3/12 rounded-lg"
              alt="popular product"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
