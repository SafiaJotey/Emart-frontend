import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../Logo/Logo';

const Header = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" hidden md:block">
        {' '}
        <Logo></Logo>
      </div>
      <div className="md:flex hidden sticky top-0 z-10   flex-row justify-between bg-black items-center  ">
        <ul className=" flex flex-col   md:flex-row justify-center items-center text-sm md:text-lg  ">
          <li className="mx-2 md:hover:bg-secondary py-3 px-8">
            <Link to="/" className="text-white  font-bold">
              Shop
            </Link>
          </li>
          <li className="mx-2 md:hover:bg-secondary py-3  px-8">
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

        {user?.email ? (
          <div className="text-center">
            <div className="text-center md:inline-block">
              <span className="text-reviewColor mx-5">
                <span className="text-white mx-2 text-sm md:text-lg">
                  Welcome !
                </span>{' '}
                {user?.displayName}
              </span>
            </div>
            <button
              onClick={logOut}
              className="text-white  md:hover:bg-secondary py-3 px-8 font-bold text-sm md:text-lg"
            >
              <Link to="login"> Sign Out</Link>
            </button>
          </div>
        ) : (
          <div className="text-white md:hover:bg-secondary py-3 px-8 font-bold text-sm md:text-lg ">
            <Link to="login"> Login</Link>
          </div>
        )}
      </div>
      <div className="sticky  top-0   md:hidden  bg-white ">
        <div className="flex flex-row ">
          {' '}
          <div className="text-2xl m-1 flex flex-row items-center">
            {open ? (
              <AiOutlineClose onClick={() => setOpen(!open)}></AiOutlineClose>
            ) : (
              <FaBars onClick={() => setOpen(!open)}></FaBars>
            )}
          </div>
          <div className="mx-auto">
            {' '}
            <Logo></Logo>
          </div>
        </div>
        <div
          className={`md:hidden ${
            open
              ? ' flex flex-col z-100   md:justify-between bg-black justify-center items-center '
              : 'hidden'
          }`}
        >
          <ul className=" duration-1000 flex flex-col   md:flex-row justify-center items-center text-sm md:text-lg  ">
            <li className="mx-2 md:hover:bg-secondary py-3 px-8">
              <Link to="/" className="text-white  font-bold">
                Shop
              </Link>
            </li>
            <li className="mx-2 md:hover:bg-secondary py-3  px-8">
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

          {user?.email ? (
            <div className="text-center">
              <div className="text-center md:inline-block">
                <span className="text-reviewColor mx-5">
                  <span className="text-white mx-2 text-sm md:text-lg">
                    Welcome !
                  </span>{' '}
                  {user?.name}
                </span>
              </div>
              <button
                onClick={logOut}
                className="text-white  md:hover:bg-secondary py-3 px-8 font-bold text-sm md:text-lg"
              >
                <Link to="login"> Sign Out</Link>
              </button>
            </div>
          ) : (
            <div className="text-white md:hover:bg-secondary py-3 px-8 font-bold text-sm md:text-lg ">
              <Link to="login"> Login</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
