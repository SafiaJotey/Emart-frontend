import React from 'react';

const Cart = (props) => {
  console.log(props.cart);
  return (
    <div>
      <h3>Order Summery:</h3>
      <h5> Total Order: {props.cart.lenght}</h5>
      <h5> Total Amount:</h5>
    </div>
  );
};

export default Cart;
