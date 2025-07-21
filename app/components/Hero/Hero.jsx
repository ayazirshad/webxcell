"use client";

import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaPlay, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import frame1Pic from "../../../public/hero/Frame1.png";
import frame2Pic from "../../../public/hero/Frame2.png";
import frame3Pic from "../../../public/hero/Frame3.png";
import elem1 from "../../../public/hero/elem1.png";
import logo from "../../../public/hero/logo.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const bgImages = [frame1Pic, frame2Pic, frame3Pic];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const arr = [0, 1, 2];
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Portfolio", link: "#portfolio" },
    { title: "Blog", link: "#blog" },
    { title: "Contact Us", link: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
  };

  const handleNextIndex = () => {
    currentIndex == bgImages.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const handleCloseMenu = () => {
    console.log("function called");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextIndex();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative h-screen overflow-hidden lg:h-max">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <div className="relative w-full h-full">
          {/* navbar  */}
          <div className="relative ">
            <div className=" bg-[#FFFFFF] text-[#101010] rounded-b-[30px] mx-5 md:mx-10 lg:mx-20">
              <div className="w-full bg-black text-white rounded-b-[30px] px-7 py-3 hidden md:flex items-center justify-between">
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
                <div className="flex justify-start h-8 w-max">
                  <Image
                    src={logo}
                    alt="logo"
                    className="object-contain h-full w-min"
                  />
                </div>
                <div
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <RiMenu3Fill size={23} />
                </div>

                <div className="items-center hidden gap-5 md:flex">
                  <nav className="flex flex-wrap justify-center ml-5 space-x-8 ">
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
                  <div className="relative" ref={searchRef}>
                    <button
                      onClick={() => toggleSearch()}
                      className="hover:cursor-pointer"
                    >
                      <IoSearchOutline size={18} />
                    </button>
                    {showSearch && (
                      <div className="absolute right-0 z-20 p-3 -bottom-36 bg-gray-50 rounded-xl">
                        <input
                          type="text"
                          placeholder="search..."
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          className="px-2 py-1 bg-[#FFF] rounded-md focus:outline-none"
                        />
                        <p className="my-3 border-t-2 border-[#101010]/10"></p>
                        <div>result</div>
                      </div>
                    )}
                  </div>
                  <button className="min-w-[166px] ml-1 lg:ml-5 uppercase bg-linear-to-r from-[#FF6700] to-[#00BFFF] text-[#FFFFFF] text-[12px] lg:text-[16px] font-bold py-3 px-5 rounded-full hover:cursor-pointer">
                    work with us
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#FFF]/50 backdrop-blur-3xl w-full z-50 transition-all ease-out duration-300 p-5 flex justify-center md:hidden items-center absolute ${
                isMenuOpen ? "right-0" : "-right-full"
              }`}
            >
              <div className="relative w-full h-full">
                <div className="flex justify-end w-full">
                  <button onClick={() => handleCloseMenu()} className="p-2">
                    <IoMdClose size={25} />
                  </button>
                </div>
                <div className="flex flex-col ">
                  {navLinks.map((item, index) => {
                    return (
                      <Link
                        href={item.link}
                        key={index}
                        className="font-semibold text-[20px] py-4 text-center w-full  border-t border-[#101010]/10"
                        onClick={() => handleCloseMenu()}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* main heading  */}
          <div className="relative flex flex-col justify-center px-5 py-12 sm:px-10 md:px-20 lg:px-32">
            <h1 className="text-[#FFFFFF] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold max-w-[965px] leading-14 md:leading-20 lg:leading-28 capitalize z-0">
              your digital future designed today
            </h1>
            <p className="mt-10 text-xl md:text-2xl md:font-semibold capitalize text-[#FFFFFF]">
              Transforming visions into Digital experiences that inspire and
              Engage
            </p>
            <div className="absolute flex h-12 w-max -bottom-8 md:-bottom-12">
              <button className="uppercase bg-[#FF6700] text-[#FFFFFF] text-[14px] md:text-[16px] font-bold h-full px-5 rounded-full hover:cursor-pointer">
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
            <div className="absolute items-center hidden md:flex right-10 md:gap-32 lg:gap-44 xl:gap-60 ">
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
          <div className="absolute flex justify-center gap-2 left-[35%] sm:left-[43%] md:left-[50%] bottom-10">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-2 sm:h-3 md:h-4 rounded-full ${
                    currentIndex == index
                      ? "bg-[#F26B01] w-16"
                      : "w-2 sm:w-3 md:w-4 bg-[#FFFFFF]"
                  } transition-all duration-300 ease-out`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex h-full overflow-hidden flex-nowrap">
        {bgImages.map((image, index) => {
          return (
            <div
              key={index}
              className="w-[100%] min-w-[100%] transition-all duration-300 h-full"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
            >
              <Image
                src={image}
                alt="heroImg"
                className="object-cover h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
