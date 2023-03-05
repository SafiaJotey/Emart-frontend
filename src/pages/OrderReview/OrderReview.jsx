import { Link } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import { useItem } from '../../context/ProductProvider';

import Order from './Order';

const OrderReview = () => {
  const { cart } = useItem();
  return (
    <div className="flex flex-col-reverse  md:flex-row  md: justify-center ">
      <div className="orders w-full md:w-2/3">
        <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 my-2">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              All Orders
            </h5>
          </div>
          <div className="flow-root">
            <ul>
              <Order></Order>
            </ul>
          </div>
        </div>
      </div>
      <div className="placeOrder ">
        <Cart>
          {cart.length ? (
            <Link to="/payment">
              {' '}
              <button className="px-8 py-2 text-white rounded-lg bg-primary text-sm font-bold my-4">
                Place Order
              </button>
            </Link>
          ) : null}
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
