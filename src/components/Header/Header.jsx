import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="logo flex justify-center items-center p-2">
        <img className="w-50 md:w-100 " src={logo} alt="" />
      </div>

      <div className="flex flex-col   md:flex-row bg-black justify-center items-center ">
        <ul className="flex flex-col   md:flex-row justify-center items-center  ">
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

        <div className="flex justify-center items-center md:ml-auto ">
          <FaShoppingCart
            style={{
              color: 'white',
              display: 'inline-block',
              margin: '0px 5px ',
            }}
          />
          <div className="text-white hover:bg-secondary py-3 px-8 font-bold ">
            <Link to="login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
