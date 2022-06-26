import { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';

const ReviewModal = (props) => {
  const { _id } = props.item;

  const { showModal, setShowModal } = props;
  const [stars, setStars] = useState(0);

  const [success, setSuccess] = useState(false);
  const handleRattings = (e) => {
    setSuccess(false);

    setStars(e);
  };

  const handleSubmit = () => {
    const info = {
      id: _id,
      newReview: stars,
    };
    console.log(stars);

    fetch(
      'https://afternoon-gorge-26422.herokuapp.com/products/updateinfo?productId',
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(info),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    setSuccess(true);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative 
               my-6 mx-auto max-w-3xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-5">
                {/*header*/}
                <div className="flex items-start justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary">
                    ADD A REVIEW
                  </h3>
                </div>
                {/*body*/}
                <div className=" py-2 px-5 w-full">
                  <div className="my-2">
                    <p className="text-3xl md:text-5xl text-reviewColor font-bold ">
                      {' '}
                      <Rating
                        initialRating={0}
                        emptySymbol={<FiStar />}
                        fullSymbol={<AiTwotoneStar />}
                        onChange={handleRattings}
                      />
                    </p>
                    <br />

                    <br />
                    {!success && (
                      <button
                        className="text-secondary text-lg text-center"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    )}

                    {success && (
                      <p className="text-green-700 text-base">
                        Review submitted. Thanks for the Review.
                      </p>
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 mr-14"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
};

export default ReviewModal;
