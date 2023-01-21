import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import CategoryProducts from '../../components/Product/CategoryProducts';
import Product from '../../components/Product/Product';
import useItem from '../../hooks/useItem';

const Shop = () => {
  const { cart, products, category, setCategory } = useItem();

  return (
    <>
      {/* <Search></Search> */}

      <div className="flex justify-center container mx-auto">
        <div className="hidden md:block m-1 w-2/12   ">
          <div className="md:sticky md:top-12">
            <div className="bg-primary   text-white text-center py-3">
              {' '}
              Sort By Category
            </div>
            <div
              className="text-center py-3 shadow-sm cursor-pointer text-black hover:bg-reviewColor hover:text-white active:bg-reviewColor"
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
            <div className=" my-20 w-100  px-0 md:px-4">
              <h2 className=" text-4xl font-bold  my-8  text-secondary flex  justify-center">
                Explore All Products
              </h2>
              <div className="flex flex-col-reverse  md:flex-row  md: justify-center    ">
                <div className="flex flex-col justify-center items-center w-full md:w-2/3">
                  <Product key={products._id}></Product>
                </div>

                <div className="order-container w-full md:w-1/3 bg-shape">
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
    </>
  );
};

export default Shop;
