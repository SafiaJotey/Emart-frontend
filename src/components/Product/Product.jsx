import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { useItem } from '../../context/ProductProvider';

import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import ProductGridCard from './ProductGridCard';
import ProductListCard from './ProductListCard';

const Product = () => {
  let content;
  const {
    state: { loading, product, error },

    grid,
    setGrid,
  } = useItem();
  if (loading) {
    content = <Spinner></Spinner>;
  } else if (error) {
    content = <p>something went wrong</p>;
  } else if (!loading && !error && product.length === 0) {
    content = (
      <div>
        <p>No products found.</p>
      </div>
    );
  } else if (!loading && !error && product.length) {
    grid
      ? (content = (
          <div className="flex flex-row flex-wrap  justify-center items-center">
            {product?.map((product) => (
              <ProductGridCard
                key={product._id}
                product={product}
              ></ProductGridCard>
            ))}
          </div>
        ))
      : (content = (
          <div className="flex flex-col ">
            {product?.map((product) => (
              <ProductListCard
                key={product._id}
                product={product}
              ></ProductListCard>
            ))}
          </div>
        ));
  }

  return (
    <div>
      <div className="flex justify-start items-center p-2">
        <div className="bg-primary p-1 m-1  rounded-md">
          {' '}
          <FaThList
            className="p-1 text-2xl cursor-pointer  text-white"
            onClick={() => setGrid(false)}
          ></FaThList>
        </div>
        <div className="bg-primary p-1 my-1 rounded-md">
          {' '}
          <BsFillGridFill
            className="p-1 text-2xl text-white cursor-pointer"
            onClick={() => setGrid(true)}
          />
        </div>
      </div>
      <div className="product-container md:border-r-secondary-200 md:border-r-2 px-5  py-2">
        {content}
      </div>

      <Pagination></Pagination>
    </div>
  );
};

export default Product;
