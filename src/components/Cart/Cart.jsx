import React from 'react';
import Items from '../Items/Items';

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shippingCharge = 15;
  for (const product of cart) {
    total = total + product.price * product.quantity;
  }
  const tax = (total + shippingCharge) * 0.1;
  const grandTotal = total + shippingCharge + tax;

  return (
    <div className="flex flex-col items-start p-5 md:fixed ">
      <h3 className="text-2xl font-bold">Order Summery:</h3>
      <h5> Total Category: {cart.length}</h5>
      {cart.length === 0 ? (
        <>
          <h5>Items list: No item available</h5>
          <h5>Shipping Charge: $ 0</h5>
          <h5> Tax : $ 0</h5>
          <h5> Total Amount: $ 0</h5>
        </>
      ) : (
        <>
          <h5>Items list: </h5>
          {cart.map((item) => (
            <Items item={item} handleRemove={props.handleRemove} />
          ))}
          <h5>Shipping Charge: $ {shippingCharge}</h5>
          <h5> Tax : $ {tax}</h5>
          <h5> Total Amount: $ {grandTotal}</h5>
        </>
      )}
    </div>
  );
};

export default Cart;
