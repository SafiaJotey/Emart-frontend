import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="logo flex justify-center items-center p-2">
        <img className="w-50 md:w-100 " src={logo} alt="" />
      </div>

      <ul class="flex flex-col   md:flex-row bg-black md:justify-center md:items-center p-3 ">
        <li class="mx-2">
          <a
            class="text-white hover:bg-secondary py-3 px-8 font-bold"
            href="/shop"
          >
            Shop
          </a>
        </li>
        <li class="mx-2">
          <a
            class="text-white hover:bg-secondary py-3 px-8 font-bold"
            href="/order"
          >
            Order Review
          </a>
        </li>
        <li class="mx-2">
          <a
            class="text-white hover:bg-secondary py-3 px-8  font-bold"
            href="/inventory"
          >
            Manage Inventory Here
          </a>
        </li>
        {/* <li class="mx-2">
          <a class="text-primary  font-bold " href="/login">
            Login
          </a>
        </li> */}
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
