import Cart from '../../components/Cart/Cart';
import Order from './Order';

const OrderReview = () => {
  return (
    <div className="flex justify-center">
      <div className="orders w-full md:w-2/3">
        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between items-center mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              All Orders
            </h5>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <Order></Order>
            </ul>
          </div>
        </div>
      </div>
      <div className="placeOrder ">
        <Cart>
          <button className="px-8 py-2  rounded-lg bg-primary text-sm font-bold my-4">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
