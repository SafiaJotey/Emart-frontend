import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import banner1 from '../../images/banner1.png';
import Popular from '../Popular/Popular';
import Carousel from './Carousel';
const Banner = () => {
  const { handleSearch, cartQuantity } = useItem();

  return (
    <div className="flex   container mx-auto">
      {' '}
      <div>
        <div className=" bg-secondary flex justify-between items-center py-2 px-2 md:px-5 ">
          <input
            className="w-full md:w-3/5 p-2 rounded-sm "
            type="text"
            placeholder="Search by name"
            onChange={handleSearch}
          />
          <Link to="/order">
            <div className="flex justify-center mx-1 ">
              <FaShoppingCart className=" text-white text-2xl " />
              <span className=" text-white text-sm  mx-1 ">{cartQuantity}</span>
            </div>{' '}
          </Link>
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
          <div className="hidden md:flex justify-center items-center my-1 bg-secondary text-white w-full md:w-9/12">
            <Carousel />
          </div>
          <div className="  hidden md:block md:w-3/12 p-1 ">
            <div className="bg-primary flex flex-col justify-center items-center py-4">
              <h6 className="text-reviewColor text-md">Pro Buyer Exclusive</h6>
              <p className="text-reviewColor text-center text-sm ">
                Get payment terms and much more
              </p>
              <Link to="/comming">
                {' '}
                <button className="xl:px-24 py-2  bg-reviewColor lg:rounded-2xl text-xm px-10 lg:text-sm font-bold my-4">
                  {' '}
                  Upgrade
                </button>
              </Link>
            </div>
            <Link to="/popular">
              {' '}
              <button className="xl:px-20 py-2  bg-reviewColor rounded-lg text-xm  px-12 lg:text-sm lg:font-bold my-2">
                {' '}
                Most Popular
              </button>
            </Link>
            <div>
              <Popular />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
