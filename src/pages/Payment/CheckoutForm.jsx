import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

import { useItem } from '../../context/ProductProvider';
import useAuth from '../../hooks/useAuth';

import Spinner from '../../components/Spinner/Spinner';
import { clearTheCart } from '../../utilities/fakedb';

const CheckoutForm = ({ data }) => {
  console.log(data);

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { totalPrice } = useItem();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      'https://emart-98vu.onrender.com/api/v1/payment/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(totalPrice),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    // Block native form submission.
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setError('');
      console.log('[PaymentMethod]', paymentMethod);
    }

    //payment confirmation
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess('');
    } else {
      setError(' ');
      console.log(paymentIntent);
      setSuccess('Your payment processed successfully');
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        clientSecret: paymentIntent.client_secret.slice('_secret')[0],
      };
      data.payment = payment;

      fetch('https://emart-98vu.onrender.com/api/v1/order/placeOrder', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          clearTheCart();
        });
      setSuccess('your payment processed successfully');

      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              padding: '20px',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      {processing ? (
        <Spinner></Spinner>
      ) : (
        <button
          className="w-full px-5 py-2 mt-10 rounded-sm bg-primary text-white font-bold "
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      )}
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
