import React from 'react';

const Items = (props) => {
  return (
    <div className="flex justify-between items-center ">
      <h5 className="mr-3 ">
        {props.item.category}{' '}
        <span>
          (${props.item.price}/pc, qty: {props.item.quantity} )
        </span>
        : $ {props.item.price * props.item.quantity}
      </h5>
      {/* <button
        className="flex justify-between items-center p-1 bg-white"
        onClick={() => props.handleRemove(props)}
      >
        <ImCross />
      </button> */}
    </div>
  );
};

export default Items;
