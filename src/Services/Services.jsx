import { FaShippingFast } from 'react-icons/fa';
import {
  RiCustomerService2Fill,
  RiMoneyDollarCircleFill,
  RiSecurePaymentFill,
} from 'react-icons/ri';

const Services = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center my-8">
      <div className="py-5  w-full md:w-1/4 p-2">
        <div className="flex flex-col justify-center items-center shadow-md py-5  ">
          <FaShippingFast className="text-3xl text-secondary" />
          <small className="text-center">
            FREE SHIPPING & RETURN <br></br>Free shipping on orders over $99
          </small>
          <div></div>
        </div>
      </div>
      <div className="py-5  w-full md:w-1/4 p-2">
        <div className="flex flex-col justify-center items-center shadow-md py-5 ">
          <RiCustomerService2Fill className="text-3xl text-secondary" />

          <small className="text-center">
            ONLINE SUPPORT 24/7 <br></br>
            get all day customer services.
          </small>
        </div>
      </div>
      <div className="py-5  w-full md:w-1/4 p-2">
        <div className="flex flex-col justify-center items-center shadow-md py-5 ">
          <RiSecurePaymentFill className="text-3xl text-secondary" />
          <small className="text-center">
            SECURE PAYMENT <br></br>
            pay for your order.
          </small>
        </div>
      </div>
      <div className="py-5  w-full md:w-1/4 p-2">
        {' '}
        <div className="flex flex-col justify-center items-center shadow-md py-5">
          <RiMoneyDollarCircleFill className="text-3xl text-secondary" />
          <small className="text-center">
            MONEY BACK GUARANTEE<br></br>
            100% money back guarantee
          </small>
        </div>
      </div>
    </div>
  );
};

export default Services;
