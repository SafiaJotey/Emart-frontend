import React from 'react';
import Items from '../Items/Items';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shippingCharge = 15;
  for (const product of cart) {
    total = total + product.price;
  }
  const tax = (total + shippingCharge) * 0.1;
  const grandTotal = total + shippingCharge + tax;

  return (
    <div className="flex flex-col items-start p-5">
      <h3>Order Summery:</h3>
      <h5> Total Order: {cart.length}</h5>
      <h5>Items list: </h5>

      {cart.map((item) => (
        <Items item={item} />
      ))}
      <h5>Shipping Charge: $ {shippingCharge}</h5>
      <h5> Tax : $ {tax}</h5>
      <br />
      <hr />
      <h5> Total Amount: {grandTotal}</h5>
    </div>
  );
};

export default Cart;
