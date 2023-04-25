import React from "react";
import profile1 from "../assests/profile1.png";
import profile2 from "../assests/profile2.png";
import profile3 from "../assests/profile3.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="h-32"></div>
        <div className="border-b-2 border-blue-800 w-fit mx-auto mb-8 mt-4">
          <h1 className="p-4 text-blue-700 flex justify-center text-xl sm:text-4xl font-extrabold ">
            Read What Others Have to Say
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24 mr-16 ml-16 mt-11">
          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2
    rounded-lg  "
          >
            <span>
              <img src={profile2} className="rounded-full h-24 w-24" />
            </span>
            <span className="text-2xl font-bold">Alia Kapoor</span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="px-4 py-2 rounded-md bg-blue-600 mt-2 text-white ">
              Get In Touch
            </button>
          </div>

          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2
     rounded-sm "
          >
            <span>
              <img src={profile1} className="rounded-full h-24 w-24" />
            </span>
            <span className="text-2xl font-bold">Mohit Raina</span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="px-4 py-2 rounded-md bg-blue-600 mt-2 text-white ">
              Get In Touch
            </button>
          </div>

          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 
    rounded-lg "
          >
            <span>
              <img src={profile3} className="rounded-full h-24 w-24" />
            </span>
            <span className="text-2xl font-bold">Kanak Rai</span>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="px-4 py-2 rounded-md bg-blue-600 mt-2 text-white ">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="border-b-2 border-blue-800 w-fit mx-auto mb-4 mt-6">
          <h1 className="p-4 text-blue-700 flex justify-center text-2xl sm:text-4xl font-extrabold mt-8">
            Popular Destinations
          </h1>
        </div>

        <div className="flex  jusftify-center items-center">
          <div className="md:flex md:flex-row flex flex-col jusftify-center items-center mx-auto  md:max-w-[80%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckwW1IN2npJP4OjE-aTORxMxMS1yr63CTdckZ26g4imy9kDYH6PlvpDDmOdG4rP8gUi4&usqp=CAU"
              alt=""
              className="md:ml-4  mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MuSyU0s1HUuOLv3RwLEXO6SfEDEbALBnvAYvtj-dqYJl4aLaMaTUhOY71IBJj0X8O2A&usqp=CAU"
              alt=""
              className="md:mr-4 md:ml-4 mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26mlwEr5Yg-cvlwuLNeyHpUMg-8VRYp79OUhQUtjwCiU1GuMCbbCyTPRYAWUcxV8u1dc&usqp=CAU"
              alt=""
              className="md:mr-4 mt-4 h-64 w-11/12 md:w-1/3"
            />
          </div>
        </div>

        <div className="flex  jusftify-center items-center">
          <div className="md:flex md:flex-row flex flex-col jusftify-center items-center mx-auto md:max-w-[80%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBq5dLjM5h_ALNhWlhGNto62EAXKrLR0F9viQaMVeyHQuz3sdXB6KIjspmf1Q9ZwyNQw&usqp=CAU"
              alt=""
              className="md:ml-4  mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxaaoV_f-MnBIIc1QuY9bJCgiDGU17r4hZNc7MXTqsDsY35JACPXa37YGNp21mdCDp7A&usqp=CAU"
              alt=""
              className="md:mr-4 md:ml-4 mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPC50uec6Tb1OTuLC7drOuIpX-r337PEbv4g&usqp=CAU "
              alt=""
              className="md:mr-4 mt-4 h-64 w-11/12 md:w-1/3"
            />
          </div>
        </div>

        <div className="flex  jusftify-center items-center">
          <div className="md:flex md:flex-row flex flex-col jusftify-center items-center mx-auto mb-12 md:max-w-[80%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBbPzpe3hQjxy-fD67isvCVnNu5nt0HH9Hj9g3OJEzfWqSJP09i0pxBao5OjOI9cab6c&usqp=CAU"
              alt=""
              className="md:ml-4  mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk907co0TI-c2pWIIuS151GeeH5B_UpNK1gg&usqp=CAU"
              alt=""
              className="md:mr-4 md:ml-4 mt-4 h-64 w-11/12 md:w-1/3"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYppCRFtxkb4ppo-SJ-a-xV28DC7ksBANjcG9tIBVwaX6Rt520nFs6OG2IVPfuQJKWZQ&usqp=CAU"
              alt=""
              className="md:mr-4 mt-4 h-64 w-11/12 md:w-1/3"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
