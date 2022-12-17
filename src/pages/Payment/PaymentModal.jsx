import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../../components/Cart/Cart';
import CheckoutForm from './CheckoutForm';
function PaymentModal(props) {
  const { showModal, setShowModal, data } = props;

  const stripePromise = loadStripe(
    'pk_test_51Jy0LwBgFp1VWIUWHbxJnNCwiyBmGGn06StHxseA6ZvMlfKJBZrkSXT1TvXeUgBiTThCByH2mc2QPbQ8q2YTJPGr00CNflA4te'
  );
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
                  <h3 className="text-2xl font-semibold">
                    Enter your card information
                  </h3>
                </div>
                {/*body*/}
                <div className=" py-2 px-5 w-full">
                  <div className="my-2">
                    <h3 className="text-2xl font-bold text-secondary">
                      Customer's Information:
                    </h3>
                    <h5>Name: {data.name}</h5>
                    <h5>Email: {data.email}</h5>
                    <h5>Address: {data.address}</h5>
                    <h5>contact: {data.mobile}</h5>

                    <Cart></Cart>
                  </div>
                  <hr />
                  <div className="my-2">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm />
                    </Elements>
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
}

export default PaymentModal;
