import Link from "next/link";
import React from "react";
import bigPic from "../../../public/latestNews/image@2x.png";
import smallPic from "../../../public/latestNews/image (1).png";
import newsPerson from "../../../public/latestNews/image.png";
import { GoArrowUpRight } from "react-icons/go";
import { BsTag } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Image from "next/image";

const LatestNews = () => {
  const news = [
    {
      title: "What’s Headless CMS",
      designation: "By Chief Solutions Architect",
      personName: "Dan Jatau",
      pic: smallPic,
      date: 20,
      month: "DEC",
      comments: ["ok"],
    },
    {
      title: "The State of Headless in 2024",
      designation: "By Chief Solutions Architect",
      personName: "Dan Jatau",
      pic: smallPic,
      date: 20,
      month: "DEC",
      comments: [],
    },
  ];
  return (
    <div
      className="flex items-center justify-center w-full px-5 md:px-10"
      id="blog"
    >
      <div className="w-[970px]">
        <div className="items-center justify-between sm:flex">
          <div>
            <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C]  to-[#6461FC] to-80% uppercase w-max">
              latest news
            </p>
            <h2 className="capitalize text-[#101010] text-[42px] font-bold pr-3 mt-2">
              latest news{" "}
              <span className="bg-linear-to-r from-[#F26B01] to-[#F5AF19] bg-clip-text text-transparent">
                &
              </span>
            </h2>
          </div>

          <div className="flex h-12 w-max text-[#FFFFFF] mt-5">
            <button className="uppercase bg-[#F26B01]/10 text-[16px] text-[#F26B01] font-bold h-full px-5 rounded-full hover:cursor-pointer">
              get started
            </button>
            <div className="bg-[#F26B01] aspect-square rounded-full">
              <Link
                href={"/"}
                className="flex items-center justify-center w-full h-full rounded-full"
              >
                <GoArrowUpRight size={23} />
              </Link>
            </div>
          </div>
        </div>
        <div className="gap-5 mt-5 md:flex">
          <div className="relative w-full overflow-hidden bg-yellow-300 md:w-1/2 rounded-2xl">
            <Image src={bigPic} alt="news" className="object-cover h-full" />
            <div className="text-[#FFFFFF] p-5 absolute top-0 left-0 w-full h-full flex flex-col justify-between">
              <div className="bg-[#F26B01] w-max px-4 rounded-xl py-2">
                <p className="font-semibold text-[24px] leading-5 ">20</p>
                <p className="uppercase text-[12px] leading-4 ">dec</p>
              </div>
              <div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <p className="scale-x-[-1]">
                      <BsTag size={20} />
                    </p>
                    <p className="text-[14px]">Technology</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <AiOutlineComment size={20} />
                    </p>
                    <p className="text-[14px]">0 Comments</p>
                  </div>
                </div>
                <p className="mt-2 font-medium text-[22px]">
                  Keep Your Business Safe & Ensure High Availability.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            {news.map((item, index) => {
              return (
                <div
                  className="border rounded-2xl border-[#EAF3F8] p-4 flex flex-col md:flex-row gap-3"
                  key={index}
                >
                  <div className="relative">
                    <Image src={item.pic} alt={item.personName} />
                    <div className="bg-[#F26B01] w-max px-4 rounded-xl py-2 absolute top-3 left-3 text-[#FFFFFF]">
                      <p className="font-semibold text-[24px] leading-5 ">20</p>
                      <p className="uppercase text-[12px] leading-4 ">dec</p>
                    </div>
                  </div>
                  <div className="py-4 w-full md:w-[50%]">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <p className="scale-x-[-1] text-[#F26B01]">
                          <BsTag size={20} />
                        </p>
                        <p className="text-[12px]">Technology</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[#F26B01]">
                          <AiOutlineComment size={20} />
                        </p>
                        <p className="text-[12px] flex gap-1">
                          <span>{item.comments.length}</span>
                          <span>Comments</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="mt-2 font-medium text-[22px] text-left">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-5 ">
                      <div className="overflow-hidden rounded-full">
                        <Image
                          src={newsPerson}
                          alt={item.personName}
                          height={45}
                        />
                      </div>
                      <div className="">
                        <p className="text-[12px] capitalize text-[#F26B01]">
                          {item.designation}
                        </p>
                        <h6 className="text-[16px]">{item.personName}</h6>
                      </div>
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

export default LatestNews;
