import React from "react";
import logo from "../../images/LogoResto.png";

function Login() {
  return (
    <div className="bg-gray-700">
      <div className="w-96 mx-auto flex flex-col items-center justify-center h-screen">
        <form className="w-full max-w-md bg-red-950 p-8 rounded-lg shadow-md mt-4 h-auto flex flex-col items-center  justify-center">
          <img src={logo} alt="LogoResto" className="h-52 w-52 mx-auto" />
          <div className="mb-6 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-100"
            >
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border border-gray-900 rounded w-full"
            />
          </div>
          <div className="mb-10 w-full">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-100"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 border border-gray-900 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="w-12 h-12 bg-custom-orange hover:bg-orange-200 text-black font-bold p-2 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-950"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
