import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import Search from '../../components/Search/Search';

const Shop = () => {
  return (
    <>
      <Search></Search>
      <div className="flex flex-col-reverse  md:flex-row  md: justify-center   w-100  px-0 md:px-20 ">
        <div className="flex flex-col justify-center items-center w-full md:w-2/3">
          <Product></Product>
        </div>

        <div className="order-container w-full md:w-1/3 bg-slate-50">
          <Cart>
            <button className="px-8 py-2  rounded-lg bg-primary text-sm font-bold my-4">
              Preview Order
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
