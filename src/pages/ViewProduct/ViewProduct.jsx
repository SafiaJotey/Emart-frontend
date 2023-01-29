import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Comments from './Comments';
import RelatedProducts from './RelatedProducts';
// import Comments from './Comments';
import ReviewModal from './ReviewModal';

const ViewProduct = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  // const handleText = (e) => {
  //   setComment(e.target.value);
  // };
  // const handleSubmit = () => {
  //   const commentInfo = {
  //     userEmail: user.email,
  //     id: id,
  //     comment: comment,
  //   };
  // fetch('http://localhost:5000/comment', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(commentInfo),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // };

  useEffect(() => {
    fetch(`https://emart-98vu.onrender.com/api/v1/product/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.data[0]));
  }, [id]);

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-4/12 shadow-sm">
          <img className=" border-2  rounded" src={item.img} alt="" />
        </div>

        <div className="w-full md:w-3/5 p-2 md:p-5">
          <div className="flex flex-col md:flex-row  md:justify-between md:items-center">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <h2 className="flex justify-start md:justify-center items-center text-xl font-bold text-reviewColor">
              {item.ratings} <AiFillStar />
              <p className=" text-xl font-bold text-black">
                ( {item.ratingsCount})
              </p>
            </h2>
          </div>
          <h3 className="text-lg">{item.category}</h3>
          <h4 className="text-lg">{item.id}</h4>
          <h4 className="mb-4 text-secondary text-lg"> By {item.seller}</h4>
          <p className="text-base text-justify mb-2 ">
            Premium leather uppers maintain their classic look from the
            hardwood, while soft cushioning helps you get through your day from
            morning to night. High tops wrap around your ankle for added support
            and style throughout your day.
          </p>
          <p className="text-base text-justify mb-4 ">
            Offering a variety of color options, you can find Pro Models to
            match anything and everything in your closet. From classic white and
            black to colored accents and daring oversized midsoles, there are
            plenty of options to highlight your unique creativity with heritage
            inspiration.
          </p>
          <small className="mt-2 text-reviewColor text-lg font-bold pr-5">
            price: ${item.price}
          </small>
          <small className="font-bold text-base">
            Stock available: {item.stock}
          </small>
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

      <div>
        <Comments key={item.id}></Comments>
      </div>
      <RelatedProducts key={item.id} category={item.category}></RelatedProducts>
    </div>
  );
};

export default ViewProduct;
