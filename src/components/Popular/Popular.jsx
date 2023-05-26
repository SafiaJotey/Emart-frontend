import React from 'react';

import { useItem } from '../../context/ProductProvider';
import PopularCard from './PopularCard';

const Popular = () => {
  const {
    state: { loading, error, displayProduct },
  } = useItem();

  let content;

  if (loading) {
    content = <small className="text-baseColor">Loading.....</small>;
  } else if (error) {
    content = <p>something went wrong</p>;
  } else if (!loading && !error && displayProduct.length === 0) {
    content = (
      <div>
        <p>No products found.</p>
      </div>
    );
  } else if (!loading && !error && displayProduct.length) {
    content = displayProduct
      .filter((prd) => prd.ratings === 5)
      .slice(0, 3)
      .map((singleProduct) => (
        <PopularCard
          key={singleProduct._id}
          singleProduct={singleProduct}
        ></PopularCard>
      ));
  }
  return <div className="">{content}</div>;
};

export default Popular;
