import { FaShoppingCart } from 'react-icons/fa';
import useItem from '../../hooks/useItem';
import banner1 from '../../images/banner1.png';
import Popular from '../Popular/Popular';
import Carousel from './Carousel';
const Banner = () => {
  const { handleSearch, cartQuantity, products } = useItem();
  const popularProducts = products.slice(0, 3);

  return (
    <div className="flex   container mx-auto">
      {' '}
      <div className="hidden md:block m-1 w-2/12">
        <div className="bg-primary   text-white text-center py-3">
          {' '}
          Sort By Category
        </div>
        <div className="text-center py-3 shadow-sm ">Men's Sneaker</div>
        <div className="text-center py-3 shadow-sm">Men's Pants</div>
        <div className="text-center py-3 shadow-sm">Men's Boot</div>
        <div className="text-center py-3 shadow-sm">Men's T-Shirt</div>
        <div className="text-center py-3 shadow-sm">Bag</div>
        <div className="text-center py-3 shadow-sm">Cap</div>
        <div className="text-center py-3 shadow-sm">Earphones</div>
        <div className="text-center py-3 shadow-sm">Bottle</div>
      </div>
      <div className="w-full md:w-10/12">
        <div className=" bg-secondary flex justify-between items-center py-2 px-2 md:px-5 ">
          <input
            className="w-full md:w-3/5 p-2 rounded-sm "
            type="text"
            placeholder="Search by name"
            onChange={handleSearch}
          />

          <div className="flex justify-center mx-1 ">
            <FaShoppingCart className=" text-white text-2xl " />
            <span className=" text-white text-sm  mx-1 ">{cartQuantity}</span>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div className="  bg-shape py-5 md:hidden">
            {' '}
            <h1 className=" px-2 text-center md:text-start text-xl md:text-3xl ">
              <span className="text-reviewColor font-bold text-2xl md:text-6xl">
                EMART,{' '}
              </span>{' '}
              It is more than just sales
            </h1>
            <div className="w-full flex justify-center ">
              <img src={banner1} className="px-4 py-2" alt="banner" />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center bg-shape w-full md:w-9/12">
            <Carousel />
          </div>
          <div className="  hidden md:block md:w-3/12 p-1 ">
            <div className="bg-primary flex flex-col justify-center items-center py-4">
              <h6 className="text-reviewColor text-md">Pro Buyer Exclusive</h6>
              <p className="text-reviewColor text-center text-sm ">
                Get payment terms and much more
              </p>
              <button className="px-24 py-2  bg-reviewColor rounded-2xl text-sm font-bold my-4">
                {' '}
                Upgrade
              </button>
            </div>
            <button className="px-20 py-2  bg-reviewColor rounded-lg text-sm font-bold my-2">
              {' '}
              Most Popular
            </button>
            <div>
              {popularProducts.map((product) => (
                <Popular key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
