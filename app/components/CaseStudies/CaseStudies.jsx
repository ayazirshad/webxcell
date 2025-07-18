"use client";
import Image from "next/image";
import orangeGroupPic from "../../../public/caseStudies/OrangeGroup.png";
import image from "../../../public/caseStudies/image.png";
import image1 from "../../../public/caseStudies/image1.png";
import image2 from "../../../public/caseStudies/image2.png";
import image3 from "../../../public/caseStudies/image3.png";
import wavesPic from "../../../public/caseStudies/HeavyWaves.png";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import React, { useState } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const caseStudiesData = [
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image,
    },
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image1,
    },
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image2,
    },
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image3,
    },
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image1,
    },
    {
      title: "Generation of wealth",
      field: "marketing",
      figure: image,
    },
  ];

  const handlePreviousIndex = () => {
    currentIndex != 0 && setCurrentIndex(currentIndex - 1);
  };

  const handleNextIndex = () => {
    currentIndex < caseStudiesData.length - 3 &&
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="bg-[#000000] text-[#FFFFFF] w-full relative">
      <div>
        <Image src={orangeGroupPic} alt="orangeGroupPic" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full py-24">
        <div className="flex justify-center items-center">
          <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C] to-[#6461FC] to-80% uppercase w-max ">
            our complete projects
          </p>
        </div>
        <h2 className="capitalize text-[42px] font-bold pr-3 text-center mt-3">
          <span className="text-[#F26B01]">Case</span> Studies
        </h2>
        <div className="flex mt-24 relative items-center">
          <div className="flex overflow-hidden">
            {caseStudiesData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl transition-all duration-300 min-w-[26%]"
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                >
                  <Image
                    src={item.figure}
                    alt={item.field}
                    height={300}
                    className="rounded-2xl"
                  />
                  <div className="absolute -bottom-28 left-4 group-hover:bottom-4 transition-all duration-300 bg-[#FFFFF0] flex gap-10 rounded-md overflow-hidden">
                    <div className="py-1 px-3 text-[#101010]">
                      <p className="text-[16px] capitalize">{item.title}</p>
                      <p className="text-sm capitalize text-[#F26B01]">
                        {item.field}
                      </p>
                    </div>
                    <div className="bg-[#F26B01]">
                      <Link
                        href={"/"}
                        className="w-full h-full rounded-full flex justify-center items-center px-4"
                      >
                        <GoArrowUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-14 w-14 rounded-full bg-[#ffffff] absolute left-10 p-1">
            <button
              className="h-full w-full rounded-full hover:bg-[#F26B01] text-[#F26B01] hover:text-[#fff] border border-[#F26B01] flex justify-center items-center hover:cursor-pointer"
              onClick={() => handlePreviousIndex()}
            >
              <HiArrowNarrowLeft size={20} />
            </button>
          </div>
          <div className="h-14 w-14 rounded-full bg-[#ffffff] absolute right-10 p-1">
            <button
              className="h-full w-full rounded-full border text-[#F26B01] hover:text-[#FFFFFF] hover:bg-[#F26B01] border-[#F26B01] flex justify-center items-center hover:cursor-pointer"
              onClick={() => handleNextIndex()}
            >
              <HiArrowNarrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-20">
        <Image src={wavesPic} alt="wavesPic" height={60} />
      </div>
    </div>
  );
};

export default CaseStudies;
