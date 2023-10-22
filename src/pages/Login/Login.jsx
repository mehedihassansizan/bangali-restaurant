/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const {user, loginUser, googleLogIn, githubLogIn} = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    loginUser(email, password)
    .then(result =>{
      const loginUser = result.user;
      console.log(loginUser);
      navigate(from, { replace: true });
      form.reset()
    })
    .catch(error => console.log(error.message))
  }

  const handleGoogle = () =>{
    googleLogIn()
    .then(result => {
      const googleUser = result.user;
      console.log(googleUser);
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  const handleGithub = () =>{
    githubLogIn()
    .then(result =>{
      const githubUser = result.user;
      console.log(githubUser);
    })
    .catch(error =>{
       console.log(error.message);
  })
}

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>

          <div className="flex flex-col w-full lg:flex-row">
            <div onClick={handleGithub} className="grid cursor-pointer flex-grow md:h-16 h-12 card bg-slate-950 rounded-box place-items-center">
              <FaGithub className="text-3xl" />
            </div>
            <div className="divider lg:h-0 lg:divider-horizontal">OR</div>
            <div onClick={handleGoogle} className="grid cursor-pointer flex-grow md:h-16 h-12 card bg-slate-900 rounded-box place-items-center">
              <FcGoogle className="text-3xl" />
            </div>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          New in This Site?{" "}
          <Link
            to="/register"
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
