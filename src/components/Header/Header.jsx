import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();

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
          {/* <li className="mx-2 hover:bg-secondary py-3 px-8 ">
            <Link to="/manage" className="text-white  font-bold">
              Manage Inventory Here
            </Link>
          </li> */}
          {/* <li className="mx-2">
          <a className="text-primary  font-bold " href="/login">
            Login
          </a>
        </li> */}
        </ul>

        {user.email ? (
          <div className="text-center">
            <div className="text-center md:inline-block">
              <span className="text-reviewColor mx-5">
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
    </div>
  );
};

export default Header;
