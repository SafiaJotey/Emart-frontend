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
          <li>
            {' '}
            <div className="flex  flex-col md:flex-row md:items-center  px-2 ">
              <div className="m-1">
                <img
                  className="w-20 h-20 rounded-sm"
                  src={product.img}
                  alt="product"
                />
              </div>
              <div className="md:flex-1 m-1 ">
                <p className="text-base  ">Product Name: {product.name}</p>
                <p className="text-base text-primary font-bold dark:text-gray-400">
                  Price: ${product.price}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-bold text-reviewColor px-1 md:px-5">
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
