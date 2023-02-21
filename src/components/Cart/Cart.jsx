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
    <div className="flex flex-col items-start p-5 md:sticky md:top-16 shadow-sm h-min[400px] rounded">
      <h3 className="text-2xl font-bold text-primary underline underline-offset-8">
        Order Summery:
      </h3>
      <div className="my-4">
        <h5 className="font-bold text-lg"> Total Items: {totalQuantity}</h5>
        <h5 className="font-bold text-sm">Product Price: {total.toFixed(2)}</h5>

        <h5 className="font-bold text-sm">Items list: </h5>
        {cart.map((item) => (
          <Items item={item} handleRemove={handleRemove} />
        ))}
        <h5 className="font-bold text-sm">
          Shipping Charge: $ {shippingCharge}
        </h5>
        <h5 className="font-bold mb-4 text-sm"> Tax : $ {tax.toFixed(2)}</h5>
        <h5 className="font-bold overline overline-offset-8 text-secondary text-sm">
          {' '}
          Total Amount: $ {grandTotal.toFixed(2)}
        </h5>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
