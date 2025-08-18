import React from 'react';

const Login = () => {
  return (
    <div className="flex  justify-center min-h-screen bg-gray-50">
      
      <div className="w-full max-w-sm p-8 space-y-6">

        <div>
          <h1 className="text-3xl w-60 font-bold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="mt-2 w-68 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form className="space-y-5">
          <div className="relative">
            <label 
              htmlFor="email" 
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
            />
          </div>

          <div className="relative">
            <label 
              htmlFor="password" 
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
