import useItem from '../../hooks/useItem';
import Items from '../Items/Items';

const Cart = (props) => {
  const { cart, handleRemove, setCartQuantity, setTotalPrice } = useItem();

  let totalQuantity = 0;
  let total = 0;

  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
    setCartQuantity(totalQuantity);
  }
  let shippingCharge = total > 0 ? 15 : 0;
  const tax = (total + shippingCharge) * 0.1;
  const grandTotal = total + shippingCharge + tax;
  setTotalPrice(grandTotal);

  return (
    <div className="flex flex-col items-start p-5 md:sticky md:top-16">
      <h3 className="text-2xl font-bold text-secondary underline underline-offset-8">
        Order Summery:
      </h3>
      <div className="my-4">
        <h5 className="font-bold"> Total Items: {totalQuantity}</h5>
        <h5 className="font-bold">Product Price: {total.toFixed(2)}</h5>

        <h5 className="font-bold">Items list: </h5>
        {cart.map((item) => (
          <Items item={item} handleRemove={handleRemove} />
        ))}
        <h5 className="font-bold">Shipping Charge: $ {shippingCharge}</h5>
        <h5 className="font-bold mb-4"> Tax : $ {tax.toFixed(2)}</h5>
        <h5 className="font-bold overline overline-offset-8 text-secondary">
          {' '}
          Total Amount: $ {grandTotal.toFixed(2)}
        </h5>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
