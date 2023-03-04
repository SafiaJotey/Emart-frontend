import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className="bg-shape">
      <div className="flex flex-col md:flex-row justify-between items  text-md center px-10 py-8 bg-secondary text-white">
        <h6 className="w-full md:w-3/12 text-start my-2 md:my-0">
          Sign Up to Newsletter
        </h6>
        <small className="text-bold w-full md:w-4/12 text-justify  my-2 md:my-0">
          Get all the latest information on Sales and Offers.
          <br />
          Receive $10 coupon for first shopping.
        </small>
        <div className="w-full md:w-5/12 text-center my-2 md:my-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="py-3 px-12 border border-transparent md:rounded-full md:rounded-r-lg my-2 md:my-0"
          />
          <button className="py-3 px-5  border border-transparent bg-primary text-white  md:rounded-full md:rounded-l-lg">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between items-start container mx-auto  py-10 border-b-2  ">
        <div className="w-full md:w-4/12 p-4  text-center md:text-justify">
          <Logo />
          <small>
            EMART is best online shopping store in Bangladesh that features 10+
            million products at affordable prices. As bangaldesh's online
            shopping landscape is expanding every year, online shopping in
            dhaka, chittagong, khulna, sylhet and other big cities are also
            gaining momentum.
          </small>
        </div>
        <div className="w-6/12 text-sm md:w-2/12 px-3">
          <h5 className="text-xl text-bold my-4 p-2">Contact</h5>

          <h6 className="text-md text-bold">Email:</h6>
          <small className="mb-2">emart@gmail.com</small>
          <h6 className="text-md text-bold">Contact:</h6>
          <small className="mb-2">+88017000000</small>
          <h6 className="text-md text-bold">Address:</h6>
          <small className="mb-2">
            House # 7/B, Flat # A-1, Road # 103 Gulshan-2,Dhaka-1212
          </small>
        </div>
        <div className="w-6/12 text-sm md:w-2/12 px-3">
          <h5 className="text-xl text-bold my-4 p-2">Account</h5>

          <p className="mb-2">Ticket</p>

          <p className="mb-2">Payment Methods</p>

          <p className="mb-2">Shipping Guide</p>
          <p className="mb-2">FAQs</p>

          <p className="mb-2">Support</p>

          <p className="mb-2">Policy</p>
        </div>
        <div className="w-6/12 text-sm md:w-2/12 px-3">
          <h5 className="text-xl text-bold my-4 p-2"> About</h5>

          <p className="mb-2">About</p>

          <p className="mb-2">Terms And Conditions</p>

          <p className="mb-2">Privacy policy</p>
          <p className="mb-2">Return Policy</p>

          <p className="mb-2">Categories</p>

          <p className="mb-2">Shop</p>
        </div>

        <div className="w-6/12  md:w-2/12 p-2">
          <h5 className="text-xl text-bold my-3 p-2"> Top Brands</h5>

          <small className="mb-2">Daraz Bangladesh</small>
          <br />

          <small className="mb-2">Alibaba Online</small>
          <br />

          <small className="mb-2">Pikabo Bangladesh</small>
          <br />
          <small className="mb-2">Mena Bazar</small>
          <br />
          <small className="mb-2">Bongo Bazar</small>
          <br />
          <small className="mb-2">Ali-Express</small>
        </div>
      </div>
      <div>
        <p className="text-sm py-5 px-16 text-center md:text-start">
          EMART ©2022 || Design And Developed By Safia Ahmed
        </p>
      </div>
    </div>
  );
};

export default Footer;
