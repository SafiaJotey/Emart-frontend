import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h3 className="text-2xl"> Sign-In</h3>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center p-5 border-slate-200 border-2 my-2">
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
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
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
                className="  w-full px-5 py-2  rounded-sm bg-primary font-bold "
                type="submit"
                value="signIn"
              />
            </div>
          </form>
        </div>
      </div>
      <div className=" my-2">
        <hr className="w-full bg-slate-200 my-2 " />
        New to Addidas?
      </div>
      <Link
        to="/register"
        className="  px-20 py-2  rounded-sm bg-primary font-bold "
      >
        Register
      </Link>
    </div>
  );
};

export default Login;
