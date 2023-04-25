import React from "react";
export default function () {
  return (
    <>
      <div className="border-b-2 border-blue-800 w-fit mx-auto mb-4 mt-4">
        <h1 className="p-4 pt-12 text-blue-700 flex justify-center text-4xl  font-extrabold">
          Blog
        </h1>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mr-16 ml-16 md:mt-8 mt-4">
        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 
rounded-lg md:mt-4"
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://thumbs.dreamstime.com/b/first-person-perspective-man-legs-beach-vintage-autumn-retro-style-41679232.jpg"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2
 rounded-sm "
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg  p-2  
rounded-lg "
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?cs=srgb&dl=pexels-pawan-yadav-2577274.jpg&fm=jpg"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>
      </div>
    </>
  );
}
