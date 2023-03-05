import React from 'react';

import Spinner from '../../components/Spinner/Spinner';
import { useItem } from '../../context/ProductProvider';
import PopularProductCard from './PopularProductCard';

const PopularProducts = () => {
  let content;
  const {
    state: { loading, error, product },
  } = useItem();

  if (loading) {
    content = <Spinner></Spinner>;
  } else if (error) {
    content = <p>something went wrong</p>;
  } else if (!loading && !error && product.length === 0) {
    content = (
      <div>
        <p>No products found.</p>
      </div>
    );
  } else if (!loading && !error && product.length) {
    content = product
      .filter((prd) => prd.ratings === 5)
      .map((singleProduct) => (
        <PopularProductCard
          key={singleProduct._id}
          singleProduct={singleProduct}
        ></PopularProductCard>
      ));
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl">Best Sellers</h2>
        <p>Explore most reviewed products by our customers</p>
        <div className="flex flex-row flex-wrap justify-center item-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
