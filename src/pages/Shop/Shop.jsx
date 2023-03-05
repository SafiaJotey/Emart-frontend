import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import CategoryProducts from '../../components/Product/CategoryProducts';
import Product from '../../components/Product/Product';
import Spinner from '../../components/Spinner/Spinner';
import { useItem } from '../../context/ProductProvider';

import Services from '../../Services/Services';

const Shop = () => {
  const { cart, products, category, setCategory } = useItem();

  return (
    <div className="">
      {/* <Search></Search> */}
      {products.length ? (
        <div>
          <div className="flex justify-center md:container mx-auto ">
            <div className="hidden md:block m-1 w-2/12 ">
              <div className="md:sticky md:top-14">
                <div className="bg-primary   text-white text-center py-3">
                  {' '}
                  Sort By Category
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-primary"
                  onClick={() => setCategory("Men's Sneaker")}
                >
                  Men's Sneaker
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory("Men's Pants")}
                >
                  Men's Pants
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory("Men's Boot")}
                >
                  Men's Boot
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory("Men's T-Shirt")}
                >
                  Men's T-Shirt
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory('Bag')}
                >
                  Bag
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory('Cap')}
                >
                  Cap
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory('Earphones')}
                >
                  Earphones
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory('Bottle')}
                >
                  Bottle
                </div>
                <div
                  className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
                  onClick={() => setCategory('')}
                >
                  Go to home
                </div>
              </div>
            </div>
            {category ? (
              <CategoryProducts></CategoryProducts>
            ) : (
              <div className="w-full md:w-10/12 ">
                {' '}
                <Banner></Banner>
                <Services></Services>
                <div className=" my-20 w-100  px-0 md:px-4">
                  <div className="flex flex-col-reverse  md:flex-row  md: justify-center    ">
                    <div className="flex flex-col justify-center items-center w-full md:w-9/12">
                      <h2 className=" text-3xl font-bold   text-secondary flex flex-column justify-center">
                        Explore All Products
                      </h2>
                      <Product key={products.id}></Product>
                    </div>

                    <div className="order-container w-full md:w-3/12 md:my-36 ">
                      <Cart key={cart._id}>
                        <Link to="order">
                          <button className="px-8 py-2 text-white  rounded-lg bg-primary text-sm font-bold my-4">
                            Preview Order
                          </button>
                        </Link>
                      </Cart>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Shop;
