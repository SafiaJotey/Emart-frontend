import useItem from '../../hooks/useItem';

const Order = () => {
  const { handleRemove, displaProducts } = useItem();
  return (
    <div>
      {displaProducts.length === 0 ? (
        <div>
          <p>No products found.</p>
        </div>
      ) : (
        displaProducts.map((product) => (
          <li class="py-5 w-full  shadow">
            <div class="flex items-center px-2 ">
              <div className="m-1">
                <img
                  class="w-16 h-16 rounded-full"
                  src={product.img}
                  alt="product"
                />
              </div>
              <div class="flex-1 m-1 ">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Product: {product.name}
                </p>
                <p class="text-sm text-primary truncate dark:text-gray-400">
                  Price: ${product.price}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <button>delete</button>
              </div>
            </div>
          </li>
        ))
      )}
    </div>
  );
};

export default Order;
