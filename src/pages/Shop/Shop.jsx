import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import useItem from '../../hooks/useItem';

const Shop = () => {
  const { cart, products } = useItem();
  return (
    <>
      {/* <Search></Search> */}
      <Banner></Banner>

      <div className=" my-20 w-100  px-0 md:px-20">
        <h2 className=" text-4xl font-bold  my-8  text-secondary flex  justify-center">
          Our products
        </h2>
        <div className="flex flex-col-reverse  md:flex-row  md: justify-center    ">
          <div className="flex flex-col justify-center items-center w-full md:w-2/3">
            <Product key={products.id}></Product>
          </div>

          <div className="order-container w-full md:w-1/3 bg-shape">
            <Cart key={cart.id}>
              <Link to="order">
                <button className="px-8 py-2 text-white  rounded-lg bg-primary text-sm font-bold my-4">
                  Preview Order
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
