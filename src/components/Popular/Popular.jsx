import React from 'react';

const Popular = ({ product }) => {
  return (
    <div className="flex justify-between items-center my-1 shadow-sm shadow-shape">
      <p className="text-xs">
        {product.name}-{product.category}
      </p>
      <img src={product.img} className="w-16" alt="popular product" />
    </div>
  );
};

export default Popular;
