import React from "react";
import LottieAnimation from "../Lottie";
import loginGif from "../animations/loginGif.json";
import { Link , useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import swal from 'sweetalert';

export default function SignUp() {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(formdata);
    const data = Object.fromEntries(formdata.entries())
    
createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        swal("Good job!", "Register successful", "success").then(
          () => {
            navigate("/Login");
          }
        )
        // ...
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Retry", "Login failed", "error").then(
          () => {
            window.location.reload(false);
          })
        // ..
      });
      }
    

  return (
    <>
      <form onSubmit={handleSignup} className="bg-blue-200 flex flex-col justify-center items-center text-justify h-screen mx-auto ">
        <h1 className="text-3xl mb-6 font-extrabold md:mt-12 mt-32">
          TripPlanner
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto shadow-lg shadow-blue-500 p-12 md:w-fit bg-blue-500">
          <span>
            <LottieAnimation lotti={loginGif} height={325} width={270} />
          </span>

          <div className="flex flex-col justify-center items-center container mx-auto ">
            <span className="sm:text-2xl text-xl font-bold mt-2">
              Enter Name
            </span>
            <span>
              <input type="text" name="username" className="p-1 mt-2 rounded-lg" />
            </span>
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
              <input type="password" name="password" className="p-1 mt-2 rounded-lg" />
            </span>
            <button type="submit" className="p-2 rounded-md text-white bg-blue-600 mt-4 ">
              Register
            </button>
          </div>
        </div>

        <div className="h-16"></div>
      </form>
    </>
  );
}
