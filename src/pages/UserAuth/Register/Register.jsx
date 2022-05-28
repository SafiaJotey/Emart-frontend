import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Error from '../../../components/alert/Error/Error';
import Success from '../../../components/alert/Success/Success';
import Spinner from '../../../components/Spinner/Spinner';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [data, setData] = useState('');

  const { signUp, loading, successAlert, errorAlert } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // data.displayName=data
    setData(data);

    signUp(data);
  };
  return (
    <div className="flex flex-col justify-center items-center my-8">
      {successAlert && <Success>{successAlert}</Success>}
      {errorAlert && <Error>{errorAlert}</Error>}
      <h3 className="text-2xl"> Sign-Up</h3>
      <div className="w-full flex justify-center items-center px-5 md:p-0">
        <div className="w-full md:w-3/5 flex justify-center items-center  ">
          {!loading && (
            <form
              className="w-full md:w-3/5 px-10 py-5 border-slate-200 border-2 my-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="py-2">
                <label className="p-2">Name</label>
                <br />
                <input
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('name', { required: true })}
                />

                {errors.name?.type === 'required' && 'name is required'}
              </div>
              <div className="py-2">
                <label className="p-2">Address</label>
                <br />
                <input
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('address', { required: true })}
                />

                {errors.address?.type === 'required' && 'address is required'}
              </div>
              <div className="py-2">
                <label className="p-2">Mobile</label>
                <br />
                <input
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('mobile', { required: true })}
                />

                {errors.mobile?.type === 'required' && 'Number is required'}
              </div>
              <div className="py-2">
                <label className="p-2">Email</label>
                <br />
                <input
                  type="email"
                  className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                  {...register('email', { required: true })}
                />

                {errors.email?.type === 'required' && 'Email name is required'}
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
                  className="  w-full px-5 py-2  rounded-sm bg-primary font-bold "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          )}
          {loading && <Spinner />}
        </div>
      </div>
      {!loading && (
        <div className=" my-2">
          <hr className="w-full bg-slate-200 my-2 " />
          Already registered?
          <Link
            to="/login"
            className=" mx-2 rounded-sm text-primary font-bold underline decoration-primary  "
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Register;
