import useItem from '../../hooks/useItem';

const Order = () => {
  const { handleRemove, cart } = useItem();
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <p>No order found.</p>
        </div>
      ) : (
        cart.map((product) => (
          <li class="py-2 w-full  shadow">
            <div class="flex  flex-col md:flex-row md:items-center  px-2 ">
              <div className="m-1">
                <img
                  class="w-20 h-20 rounded-sm"
                  src={product.img}
                  alt="product"
                />
              </div>
              <div class="md:flex-1 m-1 ">
                <p class="text-base  ">Product Name: {product.name}</p>
                <p class="text-sm text-primary font-bold dark:text-gray-400">
                  Price: ${product.price}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-bold text-red-600 ">
                <button onClick={() => handleRemove(product._id)}>
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))
      )}
    </div>
  );
};

export default Order;
