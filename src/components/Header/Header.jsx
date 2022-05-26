import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="logo flex justify-center items-center p-2">
        <img className="w-50 md:w-100 " src={logo} alt="" />
      </div>

      <ul className="flex flex-col   md:flex-row bg-black md:justify-center md:items-center p-3 ">
        <li className="mx-2">
          <Link
            to="/"
            className="text-white hover:bg-secondary py-3 px-8 font-bold"
          >
            Shop
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/order"
            className="text-white hover:bg-secondary py-3 px-8 font-bold"
          >
            Order Review
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/manage"
            className="text-white hover:bg-secondary py-3 px-8  font-bold"
          >
            Manage Inventory Here
          </Link>
        </li>
        {/* <li className="mx-2">
          <a className="text-primary  font-bold " href="/login">
            Login
          </a>
        </li> */}
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
