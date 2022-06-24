import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import ReviewModal from './ReviewModal';

const ViewProduct = () => {
  const { handleProduct, handleQuantity, count } = useItem();
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/view/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, [id]);
  console.log(item);

  return (
    <div className="flex justify-center p-16 ">
      <div className="w-2/5">
        <img src={item.img} alt="" />
      </div>

      <div className="w-3/5 p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <h2 className="flex justify-center items-center text-2xl font-bold text-reviewColor">
            {item.ratings} <AiFillStar />
            <small className=" text-lg font-bold tex-black">
              ( {item.ratingsCount})
            </small>
          </h2>
        </div>
        <h3 className="text-xl">{item.category}</h3>
        <h4 className="text-lg ">{item.id}</h4>
        <h4 className="mb-3 text-secondary"> By {item.seller}</h4>
        <p>
          Premium leather uppers maintain their classic look from the hardwood,
          while soft cushioning helps you get through your day from morning to
          night. High tops wrap around your ankle for added support and style
          throughout your day.
        </p>
        <p>
          Offering a variety of color options, you can find Pro Models to match
          anything and everything in your closet. From classic white and black
          to colored accents and daring oversized midsoles, there are plenty of
          options to highlight your unique creativity with heritage inspiration.
        </p>
        <p className="mt-2 text-reviewColor text-2xl font-bold">
          price: ${item.price}
        </p>
        <p>Stock available: {item.stock}</p>
        <div className="my-5">
          <div className="flex justify-between  items-center">
            <Link to="/">
              <button className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 ">
                {' '}
                <div className="flex justify-between text-white items-center">
                  <h5>Order Now</h5>
                </div>
              </button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="font-lg text-secondary"
            >
              Add a review
            </button>
            <ReviewModal
              showModal={showModal}
              setShowModal={setShowModal}
              // item={item}
            ></ReviewModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
