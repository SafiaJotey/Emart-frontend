import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useItem } from '../../context/ProductProvider';
import Cart from '../Cart/Cart';
import ProductGridCard from './ProductGridCard';
import ProductListCard from './ProductListCard';

const CategoryProducts = () => {
  const { state, cart, category, grid, setGrid } = useItem();

  const CategoryProducts = state.product.filter(
    (product) => product.category === category
  );

  return (
    <div className="w-full md:w-10/12  hidden md:block">
      {' '}
      <div className="  w-100  px-0 md:px-4 ">
        <h2 className="my-1 text-4xl font-bold bg-black text-white p-2 text-center ">
          {category}
        </h2>
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
        <div className="flex ">
          <div className="flex flex-col justify-center items-center w-full ">
            {grid ? (
              <div className="flex flex-row flex-wrap  justify-start items-center  ">
                {CategoryProducts?.map((product) => (
                  <ProductGridCard
                    key={product._id}
                    product={product}
                  ></ProductGridCard>
                ))}
              </div>
            ) : (
              <div className="flex flex-col ">
                {CategoryProducts?.map((product) => (
                  <ProductListCard
                    key={product._id}
                    product={product}
                  ></ProductListCard>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/3">
            <Cart key={cart.id}>
              <Link to="order">
                <button className="px-8 py-2 text-white  rounded-lg bg-primary text-sm font-bold my-4">
                  Preview Order
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
