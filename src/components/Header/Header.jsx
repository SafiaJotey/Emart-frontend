import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useItem from '../../hooks/useItem';

const Header = () => {
  const { user, logOut } = useAuth();
  const { handleSearch, cartQuantity } = useItem();
  return (
    <div className="sticky  top-0 z-10">
      <div className="flex flex-col   md:flex-row md:justify-between bg-black justify-center items-center ">
        <ul className="flex flex-col   md:flex-row justify-center items-center  ">
          <li className="mx-2 hover:bg-secondary py-3 px-8">
            <Link to="/" className="text-white  font-bold">
              Shop
            </Link>
          </li>
          <li className="mx-2 hover:bg-secondary py-3  px-8">
            <Link to="/order" className="text-white  font-bold">
              Order Review
            </Link>
          </li>
          <li className="mx-2 hover:bg-secondary py-3 px-8 ">
            <Link to="/manage" className="text-white  font-bold">
              Manage Inventory Here
            </Link>
          </li>
          {/* <li className="mx-2">
          <a className="text-primary  font-bold " href="/login">
            Login
          </a>
        </li> */}
        </ul>

        {user.email ? (
          <div className="text-center">
            <div className="text-center md:inline-block">
              <span className="text-primary mx-5">
                <span className="text-white mx-2">Welcome !</span>{' '}
                {user.displayName}
              </span>
            </div>
            <button
              onClick={logOut}
              className="text-white hover:bg-secondary py-3 px-8 font-bold "
            >
              <Link to="login"> Sign Out</Link>
            </button>
          </div>
        ) : (
          <div className="text-white hover:bg-secondary py-3 px-8 font-bold ">
            <Link to="login"> Login</Link>
          </div>
        )}
      </div>
      <div className="bg-secondary flex justify-between items-center py-2 px-2 md:px-5 ">
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
    </div>
  );
};

export default Header;
