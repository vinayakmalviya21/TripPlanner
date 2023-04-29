import React from "react";
import LottieAnimation from "../Lottie";
import loginGif from "../animations/loginGif.json";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import swal from 'sweetalert';

export default function Login() {

const navigate = useNavigate();
const handleLogin = (e) => {

  e.preventDefault();
  const formdata = new FormData(e.target);
  console.log(formdata);
  const data = Object.fromEntries(formdata.entries());

  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      swal("Good job!", "Login successful", "success").then(
        () => {
          navigate("/");
        }
      )
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Retry", "Login failed", "error").then(
        () => {
          window.location.reload(false);
        })
    });
  }


  return (
    <>
      <form onSubmit={handleLogin} className="bg-blue-200 flex flex-col justify-center items-center text-justify h-screen mx-auto ">
        <h1 className="text-3xl mb-6 font-extrabold mt-20 md:mt-12">TripPlanner</h1>

        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto shadow-lg shadow-blue-500 p-12 md:w-fit bg-blue-500">
          <span>
            <LottieAnimation lotti={loginGif} height={325} width={270} />
          </span>

          <div className="flex flex-col justify-center items-center container mx-auto ">
            <span className="sm:text-2xl text-xl font-bold mt-2">
              Enter Email
            </span>
            <span>
              <input type="email" name="email" className="p-1 mt-2 rounded-lg" />
            </span>
            <span className="sm:text-2xl text-xl font-bold mt-2">
              Enter Password
            </span>
            <span>
              <input type="text" name="password" className="p-1 mt-2 rounded-lg" />
            </span>
            <a href="/" className="mt-2 font-semibold">
              Forgot Password
            </a>
            <a href="/signup"  className="mt-2 font-semibold">
              Create account
            </a>
            <button type="submit"  className="p-2 rounded-md text-white bg-blue-600 mt-4 ">
              Login
            </button>
          </div>
        </div>

        <div className="h-16"></div>
      </form>
    </>
  );
}
