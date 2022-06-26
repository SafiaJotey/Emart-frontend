import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Comments from './Comments';
import ReviewModal from './ReviewModal';

const ViewProduct = () => {
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const handleText = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    const commentInfo = {
      userEmail: user.email,
      id: id,
      comment: comment,
    };
    fetch('https://afternoon-gorge-26422.herokuapp.com/comment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`https://afternoon-gorge-26422.herokuapp.com/view/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data[0]));
  }, [id]);
  console.log(item);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-2/5">
          <img src={item.img} alt="" />
        </div>

        <div className="w-full md:w-3/5 p-2 md:p-5">
          <div className="flex flex-col md:flex-row  md:justify-between md:items-center">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <h2 className="flex justify-start md:justify-center items-center text-xl md:text-2xl font-bold text-reviewColor">
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
            Premium leather uppers maintain their classic look from the
            hardwood, while soft cushioning helps you get through your day from
            morning to night. High tops wrap around your ankle for added support
            and style throughout your day.
          </p>
          <p>
            Offering a variety of color options, you can find Pro Models to
            match anything and everything in your closet. From classic white and
            black to colored accents and daring oversized midsoles, there are
            plenty of options to highlight your unique creativity with heritage
            inspiration.
          </p>
          <p className="mt-2 text-reviewColor text-2xl font-bold">
            price: ${item.price}
          </p>
          <p>Stock available: {item.stock}</p>
          <div className="my-5">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
              <Link to="/">
                <button className="px-5 py-2 rounded-lg bg-primary text-sm font-bold my-2 ">
                  {' '}
                  <div className="flex md: justify-between text-white items-center">
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
                item={item}
              ></ReviewModal>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" mt-16 px-2 md:px-8 text-base md:text-2xl font-bold ">
        Write about {item.name}
      </h2>
      <div className="px-2 md:px-8 mt-2 flex flex-col md:flex-row justify-start md:items-end">
        <textarea
          className="p-2 text-lg border-2 "
          placeholder="write a coment"
          onBlur={handleText}
        ></textarea>
        <button
          className="px-5 py-2 m-2 rounded-sm bg-primary text-sm font-bold my-2 "
          onClick={handleSubmit}
        >
          {' '}
          <div className=" text-white ">
            <h5>Done</h5>
          </div>
        </button>
      </div>
      <div>
        <Comments id={id}></Comments>
      </div>
    </>
  );
};

export default ViewProduct;
