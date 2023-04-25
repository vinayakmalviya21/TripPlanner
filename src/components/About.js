import React from "react";
import LottieAnimation from "../Lottie";
import aboutGif from "../animations/aboutGif.json";

export default function About() {
  return (
    <>
      <div id='About' className="border-b-2 border-blue-800 w-fit mx-auto mb-4 mt-4 ">
        <h1 className="p-4 text-blue-700 flex justify-center text-4xl font-extrabold">
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mr-16 ml-16 mt-8">
        <div className="flex flex-col justify-center items-center container mx-auto ">
          <span>
            <LottieAnimation lotti={aboutGif} height={250} width={250} />
          </span>
        </div>

        <div className="flex flex-col justify-center items-center container mx-auto text-justify">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            repellendus optio libero ullam ut, aliquam quasi laudantium facere
            doloremque modi, deserunt in unde rem eligendi autem voluptas
            impedit placeat error nam vel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, ut dolores nesciunt delectus
            laboriosam harum repudiandae est, ipsa iure similique magni autem,
            placeat voluptatem quia sed consequuntur. Quas cupiditate sequi
            reprehenderit laudantium consequatur mollitia cumque ea nulla
            voluptate laborum vero, fugiat minus maxime debitis illo ullam
            provident facilis eaque cum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </span>
        </div>
      </div>

    </>
  );
}
