import { FaShippingFast } from 'react-icons/fa';
import {
  RiCustomerService2Fill,
  RiMoneyDollarCircleFill,
  RiSecurePaymentFill,
} from 'react-icons/ri';

const Services = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center my-8">
      <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
        <FaShippingFast className="text-3xl text-secondary" />
        <p className="text-center">
          FREE SHIPPING & RETURN <br></br>Free shipping on orders over $99
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
        <RiCustomerService2Fill className="text-3xl text-secondary" />

        <p className="text-center">
          ONLINE SUPPORT 24/7 <br></br>
          get all day customer services.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
        <RiSecurePaymentFill className="text-3xl text-secondary" />
        <p className="text-center">
          SECURE PAYMENT <br></br>
          pay for your order.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
        <RiMoneyDollarCircleFill className="text-3xl text-secondary" />
        <p className="text-center">
          MONEY BACK GUARANTEE<br></br>
          100% money back guarantee
        </p>
      </div>
    </div>
  );
};

export default Services;
