import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Time = () => {
  return (
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-3 md:justify-evenly">
      {/* countries */}
      <div className="items-center">
        {/* time and plus */}
        <div className="flex justify-center md:justify-start ">
          <p className="font-bold text-5xl">24</p>
          <div className="pt-2">
            <AiOutlinePlus className="text-xl text-[#e6994e]" />
          </div>
        </div>
        <p className="text-[#828282] pt-2">COUNTRIES</p>
      </div>
      {/* Languages */}
      <div>
        {/* time and plus */}
        <div className="flex justify-center md:justify-start">
          <p className="font-bold text-5xl">28</p>
          <div className="pt-2">
            <AiOutlinePlus className="text-xl text-[#e6994e]" />
          </div>
        </div>
        <p className="text-[#828282] pt-2">LANGUAGES</p>
      </div>
      {/* countries */}
      <div>
        {/* time and plus */}
        <div className="flex justify-center md:justify-start">
          <p className="font-bold text-5xl">72</p>
          <div className="pt-2">
            <AiOutlinePlus className="text-xl text-[#e6994e]" />
          </div>
        </div>
        <p className="text-[#828282] pt-2">CHANNELS</p>
      </div>
      {/* countries */}
      <div>
        {/* time and plus */}
        <div className="flex justify-center md:justify-start">
          <p className="font-bold text-5xl">92</p>
          <div className="pt-2">
            <AiOutlinePlus className="text-xl text-[#e6994e]" />
          </div>
        </div>
        <p className="text-[#828282] pt-2">BRANDS</p>
      </div>
    </div>
  );
};

export default Time;
