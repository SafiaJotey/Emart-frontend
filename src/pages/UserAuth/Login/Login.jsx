import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  // const { setUser } = useAuth();
  // const [alertVisible, setIsAlertVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // const [data, setData] = useState({});
  // const [successAlert, setSuccessAlert] = useState('');
  // const [errorAlert, setErrorAlert] = useState('');

  const { signinWithEmail, signinWithGoogle, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signinWithEmail(data);
    // signIn(data, location, navigate);
    // setData(data);
  };
  // useEffect(() => {
  //   fetch('https://emart-98vu.onrender.com/api/v1/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // reset();
  //       console.log(result);

  //       if (result.data) {
  //         localStorage.setItem('token', JSON.stringify(result?.data?.token));
  //         navigate('/');

  //         //   localStorage.setItem('token', JSON.stringify(result.data.token));
  //         //   setUserTrue(result.data.others);
  //         //   setIsAlertVisible('true');
  //         //   setSuccessAlert(result.message);
  //         //   setErrorAlert('');
  //         //   navigate(redirect_uri);
  //         // } else {
  //         //   setIsAlertVisible('true');
  //         //   setErrorAlert(result.message);
  //         // }
  //         // // clearTheCart();
  //         // if (result.status === 'success') {
  //         //   setSuccessAlert(' Suceessfully registered');
  //         // } else {
  //         //   if (result.status === 'fail') {
  //         //     setErrorAlert('User is Alreary created with this Email');
  //         //   }
  //       }
  //     });
  // }, [data]);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      {/* {successAlert ? (
        <Success
          from="login"
          message={successAlert}
          setIsAlertVisible={setIsAlertVisible}
          alertVisible={alertVisible}
        ></Success>
      ) : (
        // from="login"
        // redirect_uri={redirect_uri}
        // message={successAlert}
        // setIsAlertVisible={setIsAlertVisible}
        // alertVisible={alertVisible}

        <Error
          setIsAlertVisible={setIsAlertVisible}
          alertVisible={alertVisible}
          message={errorAlert}
        ></Error>
      )} */}
      <h3 className="text-2xl"> Sign-In</h3>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center p-5 border-slate-200 border-2 my-2">
          {!loading && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2">
                <label className="p-2">Email</label>
                <br />
                <input
                  type="email"
                  className="border-slate-100   border-2 p-2 rounded-sm"
                  {...register('email', { required: true })}
                />

                {errors.email?.type === 'required' && 'Email name is required'}
              </div>

              <div className="p-2">
                <label className="p-2">Password</label>
                <br />
                <input
                  className="border-slate-100   border-2 p-2 rounded-sm"
                  type="password"
                  {...register('password', {
                    required: true,
                    // pattern:
                    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
                  })}

                  // You may use this regex with multiple lookahead assertions (conditions):

                  // ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
                  // This regex will enforce these rules:

                  // At least one upper case English letter, (?=.*?[A-Z])
                  // At least one lower case English letter, (?=.*?[a-z])
                  // At least one digit, (?=.*?[0-9])
                  // At least one special character, (?=.*?[#?!@$%^&*-])
                  // Minimum eight in length .{8,} (with the anchors)
                />
                {errors.password && 'Password name is required'}
              </div>

              <div className="p-2">
                <input
                  className="  w-full px-5 py-2  rounded-sm bg-primary font-bold text-white"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
          )}
          {loading && <Spinner />}
        </div>
      </div>
      {!loading && (
        <div>
          <button
            onClick={() => signinWithGoogle(location, navigate)}
            className="px-10 py-2  rounded-sm bg-primary font-bold text-white"
          >
            SignIn with Google
          </button>
          <div className=" my-2">
            <hr className="w-full bg-secondary my-5 " />
            New to EMART?{' '}
            <Link
              to="/register"
              className="  mx-2 text-primary font-bold underline decoration-primary "
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
