import React from 'react';
import useItem from '../../hooks/useItem';

const Cart = () => {
  const { cart, handleRemove } = useItem();
  console.log(cart);
  let totalQuantity = 0;
  let total = 0;

  for (const product of cart) {
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  let shippingCharge = total > 0 ? 15 : 0;
  const tax = (total + shippingCharge) * 0.1;
  const grandTotal = total + shippingCharge + tax;

  return (
    <div className="order-container w-full md:w-1/3 bg-slate-50">
      <div className="flex flex-col items-start p-5 md:fixed ">
        <h3 className="text-2xl font-bold">Order Summery:</h3>
        <h5> Total Items: {totalQuantity}</h5>
        <h5>Product Price: {total.toFixed(2)}</h5>

        {/* <h5>Items list: </h5>
        {cart.map((item) => (
          <Items item={item} handleRemove={handleRemove} />
        ))} */}
        <h5>Shipping Charge: $ {shippingCharge}</h5>
        <h5> Tax : $ {tax.toFixed(2)}</h5>
        <h5> Total Amount: $ {grandTotal.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default Cart;
