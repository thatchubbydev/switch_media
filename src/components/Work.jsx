import React from "react";
import Home from "../assets/home-digital-agency-img-01.png";

const Work = () => {
  return (
    // Parent Container
    <div className="flex">
      {/* First image container */}
      <div className="w-[70%] bg-work-image mt-[40%]">
        <div className="pb-[20%]">
          <img src={Home} />
        </div>
      </div>
      {/* Second image container */}
      <div className="bg-black mt-[40%] flex p-24 flex-col space-y-12 w-[50%]">
        <div>
          <h2 className="text-[#ba000d] uppercase  font-bold ">
            Let's work together
          </h2>
        </div>
        <div>
          <h1 className="text-white font-[600] text-5xl">
            Digital technology and marketing for leading brands
          </h1>
        </div>
        <div>
          <p className="text-gray-500 text-lg ">
            Lorem ipsum dolor amet consectetur nostrud eiusmod tempor incididunt
            et dolore enim minim veniam nostrud exercitation laboris nisi ut
            aliquip ex ea commodo incididunt.
          </p>
        </div>

        <div className="border-b-2  border-white-600 w-fit">
          <a className="text-white uppercase" href="http://">
            Start New Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
