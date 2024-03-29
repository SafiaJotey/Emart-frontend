import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  // }
  // const { alertVisible } = useAuth();
  // const [successAlert, setSuccessAlert] = useState('');
  // const [errorAlert, setErrorAlert] = useState('');

  const { signUp, loading, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.role = 'buyer';

    signUp(data)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        updateUserProfile(data.name);
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };
  // useEffect(() => {
  //   fetch('https://emart-98vu.onrender.com/api/v1/auth/signup', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       alertVisible(true);
  //       console.log(result);
  //       // reset();
  //       // // clearTheCart();
  //       // if (result.status === 'success') {
  //       //   setIsAlertVisible(true);
  //       //   setSuccessAlert(' Suceessfully registered');
  //       //   setErrorAlert('');
  //       // } else {
  //       //   setIsAlertVisible(true);
  //       //   setErrorAlert('User is Alreary created with this Email');
  //     });
  // }, [data]);
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h3 className="text-2xl"> Sign-Up</h3>
      <div className="w-full flex justify-center items-center px-5 md:p-0">
        <div className="w-full md:w-3/5 flex justify-center items-center  ">
          <form
            className="w-full md:w-2/3 px-10 py-5 border-slate-200 border-2 my-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="py-2 flex md:flex-row">
              <div className=" w-1/2 p-1">
                <label className="p-2">Name</label>
                <br />
                <input
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('name', { required: true })}
                />

                {errors.name?.type === 'required' && 'name is required'}
              </div>
              <div className=" w-1/2 p-1">
                <label className="p-2">Email</label>
                <br />
                <input
                  type="email"
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('email', { required: true })}
                />

                {errors.email?.type === 'required' && 'Email name is required'}
              </div>
            </div>
            <div className="py-2 flex md:flex-row">
              <div className=" w-1/2 p-1">
                <label className="p-2">Address</label>
                <br />
                <textarea
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('address', { required: true })}
                />

                {errors.address?.type === 'required' && 'address is required'}
              </div>
              <div className=" w-1/2 p-1">
                <label className="p-2">Mobile</label>
                <br />
                <input
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('mobile', { required: true })}
                />

                {errors.mobile?.type === 'required' && 'Number is required'}
              </div>
            </div>

            <div className="py-2">
              <label className="p-2">Password</label>
              <br />
              <input
                className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
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

            <div className="py-2">
              <input
                className="  w-full px-5 py-2  rounded-sm bg-primary font-bold text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>

      <div className=" my-2">
        <hr className="w-full bg-slate-200 my-2 " />
        Already registered?
        <Link
          to="/login"
          className=" mx-2 rounded-sm font-bold underline decoration-primary text-black"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
