import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div
      className="heroSection flex items-center justify-center w-full min-h-screen  bg-cover bg-blue-700"
      style={{
        // backgroundImage: `url(${"https://wallpaperaccess.com/full/4864325.jpg"})`,
      }}
    >
      <div className="hero-text  text-white">
        <h1 className="mt-10 text-[1.75rem] sm:text-4xl md:text-5xl font-extrabold">
          Your Journey Your Story
        </h1>

        <p>
          <Typed
            strings={["Choose Your Favorite Destination"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="heroPara text-[0.95rem] mx-4 ml-[2rem] sm:text-[1.4rem] md:text-3xl md:mx-8 font-extrabold"
          />
        </p>

        <br></br>
        <a
          href="/"
          className="hero-show text-1xl mx-32 px-2 py-1 sm:text-2xl font-bold text-blue-700 bg-blue-300 rounded-lg sm:py-2 sm:px-4 mt-4 lg:mx-48 sm:mx-40"
        >
          Travel Plan
        </a>
      </div>
    </div>
  );
}
