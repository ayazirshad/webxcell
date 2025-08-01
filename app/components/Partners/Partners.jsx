import React from "react";
import marketingPic from "../../../public/partners/marketing.png";
import mPic from "../../../public/partners/mPic.png";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import { markee } from "./partners.module.css";

const Partners = () => {
  const partner1 = { logo: marketingPic, name: "maeketing" };
  const partner2 = { logo: mPic, name: "M Company" };
  let mixedArr = [];
  for (let i = 0; i < 8; i++) {
    if (i % 2 != 0) mixedArr.push(partner1.logo);
    else mixedArr.push(partner2.logo);
  }

  const marqeeTags = [
    "branding",
    "marketing",
    "development",
    "marketing agency",
  ];

  return (
    <div className="">
      <div className="mt-24 text-center font-medium text-[22px] text-[#17012C] capitalize">
        trusted strategic partners
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12 md:gap-8">
        {mixedArr?.map((item, index) => {
          return <Image src={item} key={index} alt="logo" height={44} />;
        })}
      </div>
      <div className="w-full h-max pt-[6px] my-16">
        <marquee behavior="scroll">
          <div className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {marqeeTags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-2 md:gap-4 lg:gap-8 h-full text-[25px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-semibold text-[#101010] uppercase items-center ${
                    index % 2 != 0 && `${markee} text-[#F26B01]`
                  }`}
                >
                  <p className="h-full text-[20px] sm:text-[25px] md:text-[35px] lg:text-[45px] text-[#101010]">
                    <FaStarOfLife />
                  </p>
                  {tag}
                </div>
              );
            })}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Partners;
