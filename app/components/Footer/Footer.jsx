import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
      {/* black part  */}
      <div className="w-full py-7 bg-[#101010] text-center text-[#FFF] relative flex justify-center items-center gap-12">
        <div className="border-r-2 border-[#FFFFFF]/20 pr-2">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F26B01]">
            <FaLocationDot />
          </div>
          <p className="text-[20px]">
            Webxcell, Courtyard Ctr, Southwold Dr, Nottingham
          </p>
        </div>
        <div className="border-r-2 border-[#FFFFFF]/20 pr-10">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F26B01]">
            <IoCallOutline />
          </div>
          <p className="text-[20px]">44 (0) 800 195 7512</p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F26B01]">
            <LuMail />
          </div>
          <p className="text-[20px]">team@webxcell.com</p>
        </div>
        {/* left side half circles  */}
        <div className="absolute top-0 left-16">
          <div className="relative overflow-hidden w-28 h-28 ">
            <div className="w-28 h-28 rounded-full bg-[#F26B01]/25 absolute -top-[50%]"></div>
          </div>
        </div>
        <div className="absolute top-0 left-32">
          <div className="relative overflow-hidden w-28 h-28 ">
            <div className="w-28 h-28 rounded-full bg-[#FFFFFF]/25 absolute -top-[50%]"></div>
          </div>
        </div>
        {/* right side half circles  */}
        <div className="absolute bottom-0 right-16">
          <div className="relative overflow-hidden w-28 h-28 ">
            <div className="w-28 h-28 rounded-full bg-[#F26B01]/25 absolute -bottom-[50%]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-32">
          <div className="relative overflow-hidden w-28 h-28 ">
            <div className="w-28 h-28 rounded-full bg-[#FFFFFF]/25 absolute -bottom-[50%]"></div>
          </div>
        </div>
      </div>
      {/* white part  */}
      <div className="flex items-center justify-center py-7">white</div>
    </div>
  );
};

export default Footer;
