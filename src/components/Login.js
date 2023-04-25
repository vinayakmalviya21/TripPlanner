import React from "react";
import LottieAnimation from "../Lottie";
import loginGif from "../animations/loginGif.json";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="bg-blue-200 flex flex-col justify-center items-center text-justify h-screen mx-auto ">
        <h1 className="text-3xl mb-6 font-extrabold mt-20 md:mt-12">TripPlanner</h1>

        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto shadow-lg shadow-blue-500 p-12 md:w-fit bg-blue-500">
          <span>
            <LottieAnimation lotti={loginGif} height={325} width={270} />
          </span>

          <div className="flex flex-col justify-center items-center container mx-auto ">
            <span className="sm:text-2xl text-xl font-bold mt-2">
              Enter Username
            </span>
            <span>
              <input type="text" className="p-1 mt-2 rounded-lg" />
            </span>
            <span className="sm:text-2xl text-xl font-bold mt-2">
              Enter Password
            </span>
            <span>
              <input type="email" className="p-1 mt-2 rounded-lg" />
            </span>
            <a href="/" className="mt-2 font-semibold">
              Forgot Password
            </a>
            <a href="/signup"  className="mt-2 font-semibold">
              Create account
            </a>
            <a href="/" className="p-2 rounded-md text-white bg-blue-600 mt-4 ">
              Login
            </a>
          </div>
        </div>

        <div className="h-16"></div>
      </div>
    </>
  );
}
