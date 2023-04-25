import React from "react";
import LottieAnimation from "../Lottie";
import contactGif from "../animations/contactGif.json";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="md:min-h-[35rem]" id="Contact">
        <div className="border-b-2 border-blue-800 w-fit mx-auto">
          <h1 className="p-4 text-blue-700 flex justify-center text-4xl font-extrabold ">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mr-16 ml-16 mt-8">
          <div className="flex flex-col justify-center items-center container mx-auto ">
            <span>
              <LottieAnimation lotti={contactGif} height={350} width={350} />
            </span>
          </div>

          <div
            className="flex flex-col container mx-auto shadow-lg p-4
 rounded-md bg-blue-300 text-blue-500 mb-6 md:mb-0"
          >
            <span className="text-2xl font-bold mt-2 flex justify-start">Full Name</span>
            <span>
              <input type="text" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <span className="text-2xl font-bold mt-2">Email</span>
            <span>
              <input type="email" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <span className="text-2xl font-bold mt-2">Message</span>
            <span>
              <input type="text" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <a href="/" className="p-2 rounded-md text-white bg-blue-600 mt-4 w-fit ">
              Send message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
