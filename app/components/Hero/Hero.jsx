"use client";

import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaPlay, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import frame1Pic from "../../../public/hero/Frame1.png";
import frame2Pic from "../../../public/hero/Frame2.png";
import frame3Pic from "../../../public/hero/Frame3.png";
import elem1 from "../../../public/hero/elem1.png";
import logo from "../../../public/hero/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const bgImages = [frame1Pic, frame2Pic, frame3Pic];
  const [currentIndex, setCurrentIndex] = useState(0);

  const arr = [0, 1, 2];
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact" },
  ];

  const handleNextIndex = () => {
    currentIndex == bgImages.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextIndex();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <div className="w-full h-full">
          {/* navbar  */}
          <div className="px-20">
            <div className="w-full bg-[#FFFFFF] text-[#101010] rounded-b-[30px]">
              <div className="w-full bg-black text-white rounded-b-[30px] px-7 py-3 flex items-center justify-between">
                <div className="flex items-center gap-8 ">
                  <div className="flex items-center gap-2 font-medium text-[16px]">
                    <LuPhoneCall size={18} className="text-[#FF6700] " />
                    <p>+44 800 195 7512</p>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-[16px]">
                    <IoMailOutline size={18} className="text-[#FF6700] " />
                    <p>team@webxcell.com</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaFacebookF size={18} className="text-[#FF6700]" />
                  <FaXTwitter size={18} className="text-[#FF6700]" />
                  <FaLinkedinIn size={18} className="text-[#FF6700]" />
                  <FaYoutube size={18} className="text-[#FF6700]" />
                </div>
              </div>
              <div className="flex items-center justify-between py-5 px-7">
                <div>
                  <Image src={logo} alt="logo" height={35} />
                </div>
                <div className="flex items-center gap-5">
                  <nav className="flex gap-8">
                    {navLinks.map((item, index) => {
                      return (
                        <Link
                          href={item.link}
                          key={index}
                          className="font-semibold text-[16px]"
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </nav>
                  <button className="ml-3">
                    <IoSearchOutline size={18} />
                  </button>
                  <button className="ml-5 uppercase bg-linear-to-r from-[#FF6700] to-[#00BFFF] text-[#FFFFFF] text-[16px] font-bold py-3 px-5 rounded-full hover:cursor-pointer">
                    work with us
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* main heading  */}
          <div className="relative flex flex-col justify-center px-32 py-12">
            <h1 className="text-[#FFFFFF] text-8xl font-semibold max-w-[965px] leading-28 capitalize">
              your digital future designed today
            </h1>
            <p className="mt-10 text-2xl font-semibold capitalize text-[#FFFFFF]">
              Transforming visions into Digital experiences that inspire and
              Engage
            </p>
            <div className="absolute flex h-12 w-max -bottom-12">
              <button className="uppercase bg-[#FF6700] text-[#FFFFFF] text-[16px] font-bold h-full px-5 rounded-full hover:cursor-pointer">
                view services
              </button>
              <div className="bg-[#00BFFF] aspect-square rounded-full">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full rounded-full"
                >
                  <GoArrowUpRight size={25} />
                </Link>
              </div>
            </div>
            <div className="absolute flex items-center right-10 gap-60 ">
              <div className="w-16 h-16 p-[4px] rounded-full border border-[#FFFFFF]/15 ">
                <div className="w-full  p-2 rounded-full border border-[#FFFFFF]/50 h-full ">
                  <button
                    className="bg-[#FFFFFF] text-[#F26B01] w-full h-full rounded-full flex justify-center items-center hover:cursor-pointer"
                    onClick={() => handleNextIndex()}
                  >
                    <FaPlay size={13} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[#FFFFFF]">
                <button className="border border-[#FFFFFF] hover:border-[#F26B01] hover:bg-[#F26B01] h-7 w-7 p-2 rounded-full flex items-center justify-center">
                  <FaFacebookF size={12} />
                </button>
                <button className="border border-[#FFFFFF] hover:border-[#F26B01] hover:bg-[#F26B01] h-7 w-7 p-2 rounded-full flex items-center justify-center ">
                  <FaTwitter />
                </button>
                <button className="border border-[#FFFFFF] hover:border-[#F26B01] hover:bg-[#F26B01] h-7 w-7 p-2 rounded-full flex items-center justify-center">
                  <RiInstagramFill />
                </button>
                <button className="border border-[#FFFFFF] hover:border-[#F26B01] hover:bg-[#F26B01] h-7 w-7 p-2 rounded-full flex items-center justify-center">
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image src={elem1} alt="png" />
          </div>
          <div className="flex justify-center gap-2 ">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-4 rounded-full ${
                    currentIndex == index
                      ? "bg-[#F26B01] w-16"
                      : "w-4 bg-[#FFFFFF]"
                  } transition-all duration-300 ease-out`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-nowrap">
        {bgImages.map((image, index) => {
          return (
            <div
              key={index}
              className="w-[100%] min-w-[100%] transition-all duration-300"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
            >
              <Image src={image} alt="heroImg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
