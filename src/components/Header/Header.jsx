import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="logo flex justify-center items-center p-2">
        <img className="w-50 md:w-100 " src={logo} alt="" />
      </div>

      <ul class="flex bg-black justify-center items-center p-3 ">
        <li class="mx-8">
          <a class="text-white hover:text-primary font-bold" href="/shop">
            Shop
          </a>
        </li>
        <li class="mx-8">
          <a class="text-white hover:text-primary font-bold" href="/order">
            Order Review
          </a>
        </li>
        <li class="mx-8">
          <a class="text-white hover:text-primary font-bold" href="/inventory">
            Manage Inventory Here
          </a>
        </li>
        <li class="mx-8">
          <a class="text-white hover:text-primary font-bold " href="/login">
            Login
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
