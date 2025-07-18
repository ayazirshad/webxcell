import React from "react";
import "./ExpertTeam.css";
import Image from "next/image";
import xvector from "../../../public/expertTeam/xvector.png";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ExpertTeam = () => {
  const team = [
    {
      name: "Dan, J",
      designation: "founder",
    },
    {
      name: "Ismail, S",
      designation: "marketing",
    },
    {
      name: "Rabeel, R",
      designation: "marketing",
    },
    {
      name: "Ashikur, R",
      designation: "marketing",
    },
  ];
  return (
    <div className="py-20 w-full ">
      <div className="w-full flex flex-col justify-center items-center">
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
      <div className="mt-8 w-full flex justify-center gap-5 ">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="hexagon flex justify-center flex-col items-center bg-linear-to-b from-[#FF6700] to-[#32CD32] pt-14 px-12 pb-8 text-[#ffffff]"
            >
              <div>
                <Image src={xvector} alt="xvector" height={44} />
              </div>
              <div className="flex gap-3 h-12 mt-4">
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
              <div className="font-semibold mt-2">{member.name}</div>
              <div className="text-sm capitalize font-thin">
                {member.designation}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-[#F26B01] mt-24 mx-16 rounded-xl">orange div</div>
    </div>
  );
};

export default ExpertTeam;
