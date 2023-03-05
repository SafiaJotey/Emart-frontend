import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const PopularCard = ({ singleProduct }) => {
  const navigate = useNavigate();

  const handleView = (e, id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={(e) => handleView(e, singleProduct._id)}
      className="flex  justify-center items-center my-1 shadow-sm cursor-pointer"
    >
      <div className=" text-primary w-9/12">
        <small className="text-xs p-1 ">{singleProduct.name}</small>
        <p className="text-xs font-bold">
          {singleProduct.category} at only{' '}
          <span className="text-secondary"> ${singleProduct.price}</span>
        </p>
        <p className="text-md text-reviewColor text-xs font-bold  ">
          {' '}
          <Rating
            initialRating={singleProduct.ratings}
            readonly
            emptySymbol={<FiStar />}
            fullSymbol={<AiTwotoneStar />}
          />
        </p>
      </div>
      <img
        src={singleProduct.img}
        className="w-3/12 rounded-lg"
        alt="popular singleProduct"
      />
    </div>
  );
};

export default PopularCard;
