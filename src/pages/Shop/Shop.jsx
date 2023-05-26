import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Product/Categories';
import CategoryProducts from '../../components/Product/CategoryProducts';
import Product from '../../components/Product/Product';
import Services from '../../components/Services/Services';
import { useItem } from '../../context/ProductProvider';

const Shop = () => {
  let content;
  const {
    state: { category, searchedWord, product, displayProduct },
  } = useItem();

  const matchedProduct = product.filter((product) =>
    product.name.toLowerCase().includes(searchedWord.toLowerCase())
  );
  if (category) {
    content = <CategoryProducts></CategoryProducts>;
  }
  if (!category && !searchedWord) {
    content = (
      <>
        <Banner></Banner>
        <Services></Services>
        <div className=" my-20 w-100  px-0 md:px-4">
          <div className="flex flex-col-reverse  md:flex-row  md: justify-center    ">
            <div className="flex flex-col justify-center items-center w-full md:w-9/12">
              <h2 className=" text-3xl font-bold   text-secondary flex flex-column justify-center">
                Explore All Products
              </h2>
              <Product displayProduct={displayProduct}></Product>
            </div>

            <div className=" w-full md:w-3/12 md:my-36 ">
              <Cart>
                <Link to="order">
                  <button className="px-8 py-2 text-white  rounded-lg bg-primary text-sm font-bold my-4">
                    Preview Order
                  </button>
                </Link>
              </Cart>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (searchedWord) {
    content = <Product displayProduct={matchedProduct}></Product>;
  }
  return (
    <div className="">
      {/* <Search></Search> */}

      <div>
        <div className="flex justify-center md:container mx-auto ">
          <Categories></Categories>

          <div className="w-full md:w-10/12 "> {content}</div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;
