import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row bg-white overflow-hidden font-sans">
      
      {/* ✅ Left Panel with Gradient and Same Curve Class */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-300 via-white to-blue-500 text-blue-900 flex flex-col justify-center items-center px-6 md:px-10 py-12 md:py-0 custom-rounded-panel">
        <h2 className="text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
          Hello, Welcome!
        </h2>
        <p className="mb-10 text-lg font-light text-blue-800/90">
          Don’t have an Account?
        </p>
        <Link to="/register">
          <button className="border border-blue-800 text-blue-800 px-8 py-3 text-lg rounded-full font-medium hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out shadow-md">
            Register
          </button>
        </Link>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12 md:py-0">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Login</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <div className="text-sm text-right text-gray-500 hover:underline cursor-pointer">
            Forgot password?
          </div>
          <button className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
            Login
          </button>
        </form>
      </div>

    </div>
  );
};

export default Login;
