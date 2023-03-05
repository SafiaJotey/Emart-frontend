import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const PopularProductCard = ({ singleProduct }) => {
  const navigate = useNavigate();

  const handleView = (e, id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div
      onClick={(e) => handleView(e, singleProduct._id)}
      className="shadow-lg m-1 p-3 md:w-2/12  border-0 hover:border-2  border-baseColor
            
            cursor-pointer"
    >
      <img
        className=" border-2 rounded "
        src={singleProduct.img}
        alt="product"
      />
      <small className="font-bold text-primary">
        name:{singleProduct.name}
      </small>
      <br />
      <small>category:{singleProduct.category}</small>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {' '}
        <small>${singleProduct.price}</small>
        <p className="text-md text-reviewColor font-bold  ">
          {' '}
          <Rating
            initialRating={singleProduct.ratings}
            readonly
            emptySymbol={<FiStar />}
            fullSymbol={<AiTwotoneStar />}
          />
        </p>
        <p
          className="text-md text-primary 
                    font-bold"
        >
          ({singleProduct.ratingsCount})
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
