import React from "react";
import logo from "../assets/switchlogo-dk.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="my-10 ml-5 space-y-8">
      {/* main div */}
      <div className="flex-none md:flex justify-evenly space-y-6">
        {/* logo */}
        <div className="space-y-2">
          <img src={logo} alt="logo" width={125} />
          <h1 className="font-semibold text-xl">
            We create experiences for brands companies by using creativity.
          </h1>
        </div>
        {/* company */}
        <div className="space-y-2">
          <p className="uppercase  font-medium">company</p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            About company
          </p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            Company services
          </p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            Contact us
          </p>
        </div>
        {/* services */}
        <div className="space-y-2">
          <p className="uppercase  font-medium">services</p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            Brand experience
          </p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            Content writing
          </p>
          <p className="text-[#828282] text-sm hover:text-[orange]">
            Marketing strategy
          </p>
        </div>
        <div className="space-y-8">
          <p className="uppercase font-medium">follow us</p>
          <div className="flex space-x-6">
            <AiOutlineTwitter className="hover:text-[orange]" />
            <AiOutlineInstagram className="hover:text-[orange]" />
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div className="flex flex-col-reverse md:flex-row  md:mx-28 md:justify-between">
        <div className="text-[#828282]">
          &copy; 2021 <span className="underline text-black">SwitchTV</span>
        </div>
        <div className="text-[#828282] pb-3 md:pb-0">Terms of service</div>
      </div>
    </div>
  );
};

export default Footer;
