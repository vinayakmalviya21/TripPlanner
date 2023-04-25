import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-200 text-blue-700 md:flex md:flex-row md:justify-between md:items-center md:w-[90%] md:h-[10%] md:p-0 absolute rounded-[13px] z-[999] md:mx-16 top-[20px] flex-col p-8 mx-4 flex justify-center items-center w-[90%]">
        <div className="flex items-center w-full justify-between">
          <h1 className="md:text-[1.5rem] cursor-pointer color-[#222]  px-4 font-extrabold text-2xl">
            TripPlanner
          </h1>
          <AiOutlineMenu
            className="text-black md:hidden"
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
        </div>

        <div>
          <ul
            className={`${
              !isOpen ? "hidden" : ""
            }   md:flex md:flex-row md:justify-center items-center  px-2 font-bold text-[1.3rem] cursor-pointer  flex-col justify-center`}
          >
            <li>
              <Link to={'/'}>
              <i className="fa-solid fa-house-user mx-4 hover:bg-blue-500 hover:p-1 hover:rounded-md duration-500 md:p-0 p-8">
                Home
              </i>
              </Link>
            </li>
            <li>
              <a href="#About">
              <i className="fa-solid fa-circle-info mx-4 hover:bg-blue-500 hover:p-1 hover:rounded-md duration-500 md:p-0 p-8">
                About
              </i>
              </a>
            </li>
            <li>
              <Link to={'/service'}>
              <i className="fa-solid fa-briefcase mx-4 hover:bg-blue-500 hover:p-1 hover:rounded-md duration-500 md:p-0 p-8">
                Service
              </i>
              </Link>
            </li>
            <li>
              <a href="#Contact">
              <i className="fa-solid fa-address-book mx-4 hover:bg-blue-500 hover:p-1 hover:rounded-md duration-500 md:p-0 p-8">
                Contact
              </i>
              </a>
            </li>
            <li>
              <Link to={'/Login'}>
              <button className="bg-blue-200 px-4 py-2 rounded-md duration-500 hover:bg-blue-500  hover:rounded-md mx-10 md:mx-6 md:text-lg">
                Login
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
