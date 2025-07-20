"use client";

import React, { useState } from "react";
import "./ExpertTeam.css";
import Image from "next/image";
import xvector from "../../../public/expertTeam/xvector.png";
import commasPic from "../../../public/expertTeam/Group@2x.png";
import person1 from "../../../public/expertTeam/image (1).png";
import person2 from "../../../public/expertTeam/image (2).png";
import person3 from "../../../public/expertTeam/image (3).png";
import person4 from "../../../public/expertTeam/image.png";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const ExpertTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const team = [
    {
      name: "Dan, J",
      designation: "founder",
      saying:
        "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
      pic: person1,
    },
    {
      name: "Ismail, S",
      designation: "marketing",
      saying:
        "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
      pic: person2,
    },
    {
      name: "Rabeel, R",
      designation: "marketing",
      saying:
        "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
      pic: person3,
    },
    {
      name: "Ashikur, R",
      designation: "marketing",
      saying:
        "Inceptos euismod aenean vulputate senectus penatibus letius. Nunc neque faucibus egestas molestie cubilia inceptos in facilisi venenatis. Accumsan suspendisse nisi class ut torquent nec felis senectus feugiat.",
      pic: person4,
    },
  ];

  const handlePreviousIndex = () => {
    currentIndex == 0
      ? setCurrentIndex(team.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleNextIndex = () => {
    currentIndex == team.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full py-20 ">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C] to-[#6461FC] to-80% uppercase w-max">
          our expert team
        </p>

        <h2 className="capitalize text-[#101010] text-[42px] font-bold pr-3 mt-2">
          our expert{" "}
          <span className="bg-linear-to-r from-[#F26B01] to-[#F29F5C] bg-clip-text text-transparent">
            Team
          </span>
        </h2>
      </div>
      <div className="flex justify-center w-full gap-5 mt-8 ">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="hexagon flex justify-center flex-col items-center bg-linear-to-b from-[#FF6700] to-[#32CD32] pt-14 px-12 pb-8 text-[#ffffff]"
            >
              <div>
                <Image src={xvector} alt="xvector" height={44} />
              </div>
              <div className="flex h-12 gap-3 mt-4">
                <p className="border h-7 w-7 rounded-full p-2 border-[#FFFFFF] flex justify-center items-center ">
                  <FaFacebookF size={15} className="" />
                </p>
                <p className="border h-7 w-7 rounded-full p-2 bg-[#ffffff] border-[#FFFFFF] mt-auto flex justify-center items-center ">
                  <FaXTwitter size={18} className="text-[#FF6700] " />
                </p>
                <p className="border h-7 w-7 rounded-full p-2 border-[#FFFFFF] flex justify-center items-center ">
                  <FaLinkedinIn size={18} className="" />
                </p>
              </div>
              <div className="mt-2 font-semibold">{member.name}</div>
              <div className="text-sm font-thin capitalize">
                {member.designation}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-[#F26B01] mt-24 mx-16 rounded-xl flex py-20">
        <div className=" w-[45%] flex flex-col justify-center items-center">
          <div className="text-[#FFFFFF] text-[16px] flex items-center gap-2">
            <div className="relative flex w-28 h-9">
              <Image
                src={person1}
                alt="person"
                height={35}
                className="absolute top-0 left-0"
              />
              <Image
                src={person2}
                alt="person"
                height={35}
                className="absolute top-0 left-6"
              />
              <Image
                src={person3}
                alt="person"
                height={35}
                className="absolute top-0 left-12 border-2 rounded-full border-[#F26B01]"
              />
              <Image
                src={person4}
                alt="person"
                height={35}
                className="absolute top-0 left-18"
              />
            </div>
            <p>1.5k happy clients</p>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="h-14 w-14 rounded-full bg-[#ffffff] p-1">
              <button
                className="h-full w-full rounded-full hover:bg-[#F26B01] text-[#F26B01] hover:text-[#fff] border border-[#F26B01] flex justify-center items-center hover:cursor-pointer"
                onClick={() => handlePreviousIndex()}
              >
                <HiArrowNarrowLeft size={20} />
              </button>
            </div>
            <div className="h-14 w-14 rounded-full bg-[#ffffff] p-1">
              <button
                className="h-full w-full rounded-full border text-[#F26B01] hover:text-[#FFFFFF] hover:bg-[#F26B01] border-[#F26B01] flex justify-center items-center hover:cursor-pointer"
                onClick={() => handleNextIndex()}
              >
                <HiArrowNarrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[55%] pr-32">
          <div className="flex overflow-hidden flex-nowrap">
            {team.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[100%] min-w-[100%] transition-all duration-300 text-[#FFFFFF] "
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                >
                  <Image src={commasPic} alt="commas" height={35} />

                  <p className="text-[24px] mt-5 capitalize">
                    <em> {item.saying}</em>
                  </p>
                  <div className="flex items-center gap-3 mt-5 ">
                    <div>
                      <Image src={item.pic} alt={item.name} height={45} />
                    </div>
                    <div className="">
                      <h6 className="text-[18px] font-semibold">{item.name}</h6>
                      <p className="text-[16px] capitalize">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
