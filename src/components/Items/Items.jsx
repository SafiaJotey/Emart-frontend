import React from 'react';

const Items = (props) => {
  return (
    <div>
      <h5>
        {props.item.category} : $ {props.item.price}
      </h5>
    </div>
  );
};

export default Items;
