import { useNavigate } from 'react-router-dom';

const Error = ({ setIsAlertVisible, alertVisible, message }) => {
  const navigate = useNavigate();

  setTimeout(() => {
    setIsAlertVisible(false);
  }, 5000);
  return (
    <>
      {alertVisible ? (
        <div
          className="w-5/12 bg-yellow-100 border-l-4 border-reviewColor text-reviewColor p-4 shadow-lg"
          role="alert"
        >
          <p>{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Error;
