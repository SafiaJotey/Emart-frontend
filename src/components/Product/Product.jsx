import { AiOutlineMinus, AiOutlinePlus, AiTwotoneStar } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaShoppingCart, FaThList } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import Pagination from '../Pagination/Pagination';

const Product = () => {
  const { handleProduct, displaProducts, handleQuantity, grid, setGrid } =
    useItem();

  return (
    <div>
      <div className="flex justify-start items-center p-2">
        <div className="bg-primary p-1 m-1  rounded-md">
          {' '}
          <FaThList
            className="p-2 text-4xl cursor-pointer  text-white"
            onClick={() => setGrid(false)}
          ></FaThList>
        </div>
        <div className="bg-primary p-1 my-1 rounded-md">
          {' '}
          <BsFillGridFill
            className="p-2 text-4xl text-white cursor-pointer"
            onClick={() => setGrid(true)}
          />
        </div>
      </div>
      <div className="product-container md:border-r-secondary-200 md:border-r-2 ">
        {displaProducts.length === 0 ? (
          <div>
            <p>No products found.</p>
          </div>
        ) : grid ? (
          <div className="flex flex-row flex-wrap  justify-center items-center">
            {displaProducts?.map((product) => (
              <div className="w-full md:w-1/3 md:p-1 ">
                <div className="shadow-lg px-3  border-0 rounded-lg ">
                  {' '}
                  <img
                    className="  border-2 rounded "
                    src={product.img}
                    alt="product"
                  />
                  <div className="min-h-[160px]">
                    <small className=" text-primary text-md">
                      {product.name}
                    </small>
                    <br />
                    <small className=" text-primary fw-bold p-1">
                      {product.category}
                    </small>
                    <small className="pl-5 text-peimary text-lg">
                      ${product.price}
                    </small>

                    <div className="flex flex-row justify-between items-center">
                      {' '}
                      <p className="text-lg text-reviewColor font-bold  ">
                        {' '}
                        <Rating
                          initialRating={product.ratings}
                          readonly
                          emptySymbol={<FiStar />}
                          fullSymbol={<AiTwotoneStar />}
                        />
                      </p>
                      <p
                        className="text-md text-primary 
                  font-bold"
                      >
                        ({product.ratingsCount})
                      </p>
                    </div>
                    <div className="my-1">
                      <p className="font-xs text-primary">select quantity</p>
                      <div>
                        <button
                          className="p-1 text-primary rounded-sm"
                          onClick={() => handleQuantity(true, product)}
                        >
                          <AiOutlinePlus />
                        </button>
                        <input
                          type="text"
                          className="w-1/6 text-center mx-2"
                          id={product.id}
                          min={1}
                          value="1"
                        />
                        <button
                          className="p-1  text-primary rounded-sm"
                          onClick={() => handleQuantity(false, product)}
                        >
                          <AiOutlineMinus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 "
                      onClick={() => handleProduct(product)}
                    >
                      {' '}
                      <div className="flex justify-between text-white items-center text-lg">
                        <FaShoppingCart />
                      </div>
                    </button>
                    <div>
                      <Link
                        to={`/product/${product._id}`}
                        className="text-secondary  font-bold text-sm"
                      >
                        View product{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col ">
            {displaProducts?.map((product) => (
              <div className="w-full">
                <div className="flex flex-col justify-center items-center  md:flex-row   p-1 border-b-2 border-b-secondary-200">
                  <div className="image w-full md:w-3/12 ">
                    <img src={product.img} alt="product" />
                  </div>
                  <div className="details w-full md:w-2/3 text-justify md:text-left py-5 px-2 md:px-5">
                    <h2 className="text-md md:text-lg text-primary font-bold">
                      {' '}
                      Product Name: {product.name}
                    </h2>
                    <p className="text-sm font-bold">
                      Category: {product.category}
                    </p>
                    {/* <small className="text-sm text-secondary">
                    ID: {product.id}
                  </small>
                  <p className="text-lg">By: {product.seller}</p> */}

                    <div className="flex  flex-col md:flex-row  items-start justify-start md:justify-between md:items-center">
                      <h6 className="text-lg text-primary font-bold">
                        Price: $ {product.price}
                      </h6>
                      <div className="flex flex-col md:flex-row justify-end items-center">
                        {' '}
                        <p className="text-md text-reviewColor font-bold  ">
                          {' '}
                          <Rating
                            initialRating={product.ratings}
                            readonly
                            emptySymbol={<FiStar />}
                            fullSymbol={<AiTwotoneStar />}
                          />
                        </p>
                        <p
                          className="text-md text-primary 
                    font-bold"
                        >
                          ({product.ratingsCount})
                        </p>
                      </div>
                    </div>
                    <div className="my-1">
                      <p className="font-xs text-secondary">select quantity</p>
                      <button
                        className="p-2 bg-shape rounded-sm"
                        onClick={() => handleQuantity(true, product)}
                      >
                        <AiOutlinePlus />
                      </button>
                      <input
                        type="text"
                        className="w-1/6 text-center mx-2"
                        id={product.id}
                        min={1}
                        value="1"
                      />
                      <button
                        className="p-2 bg-shape rounded-sm"
                        onClick={() => handleQuantity(false, product)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 "
                        onClick={() => handleProduct(product)}
                      >
                        {' '}
                        <div className="flex justify-between text-white items-center">
                          <FaShoppingCart /> <h5>Add to cart</h5>
                        </div>
                      </button>
                      <div>
                        <Link
                          to={`/product/${product._id}`}
                          className="text-secondary  font-bold "
                        >
                          View product{' '}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Pagination></Pagination>
    </div>
  );
};

export default Product;
