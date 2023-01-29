import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import useProducts from '../../hooks/useProducts';

import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ category }) => {
  const navigate = useNavigate();

  const { allProducts } = useProducts();
  const relatedProducts = allProducts.filter(
    (product) => product.category === category
  );

  const handleView = (e, id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="my-8">
      <h2 className="font-bold text primary text-xl my-3 px-2">
        Related Products
      </h2>
      <div className="flex flex-row flex-wrap justify-start item-center">
        {relatedProducts.map((relatedProduct) => {
          return (
            <div
              onClick={(e) => handleView(e, relatedProduct._id)}
              className="shadow-lg m-1 p-3 md:w-2/12  border-0 hover:border-2  border-baseColor
            
            cursor-pointer"
            >
              <img
                className=" border-2 rounded "
                src={relatedProduct.img}
                alt="product"
              />
              <small className="font-bold text-primary">
                name:{relatedProduct.name}
              </small>
              <br />
              <small>category:{relatedProduct.category}</small>

              <div className="flex flex-col md:flex-row justify-between items-center">
                {' '}
                <small>${relatedProduct.price}</small>
                <p className="text-md text-reviewColor font-bold  ">
                  {' '}
                  <Rating
                    initialRating={relatedProduct.ratings}
                    readonly
                    emptySymbol={<FiStar />}
                    fullSymbol={<AiTwotoneStar />}
                  />
                </p>
                <p
                  className="text-md text-primary 
                    font-bold"
                >
                  ({relatedProduct.ratingsCount})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
