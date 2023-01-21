import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Success = (props) => {
  const navigate = useNavigate();

  const { from, message, setIsAlertVisible, alertVisible } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlertVisible(false);
      // if (from === 'register') {
      //   navigate(redirect_uri);
      //}
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alertVisible ? (
        <div
          className="w-5/12 bg-green-100 border-l-4 border-secondary text-secondary p-4 shadow-lg"
          role="alert"
        >
          <p>{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Success;
