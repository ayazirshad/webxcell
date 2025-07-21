import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa6";
import logo from "../../../public/footer/logo.png";
import letterPic from "../../../public/footer/Group.png";
import LinesPic from "../../../public/footer/liness.png";
import Link from "next/link";

const Footer = () => {
  const links = [
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Blog & News", href: "/blog" },
    { title: "FAQ’S", href: "/faq" },
    { title: "Login / Register", href: "/login" },
  ];

  const services = [
    { title: "Digital Marketing", href: "/services/digital-marketing" },
    { title: "Web Development", href: "/services/web-development" },
    { title: "SEO optimized", href: "/services/seo" },
    { title: "App Development", href: "/services/app-development" },
    { title: "Email Marketing", href: "/services/email-marketing" },
  ];

  return (
    <div>
      {/* black part  */}
      <div className="w-full py-7 bg-[#101010] text-center text-[#FFF] relative flex justify-center items-center gap-12 z-10">
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
      <div className="flex flex-col items-center py-12 bg-[#F26B01]/5 relative overflow-hidden">
        <div className="z-10 flex gap-20">
          <div>
            <div className="pl-5 mb-5">
              <Image src={logo} alt="webxcell" height={24} />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-5 h-0 border-t border-black"></p>
              <p className="capitalize font-medium text-[16px]">
                digital engineers
              </p>
              <div className="flex items-center gap-2 ml-5">
                <Link href={"/"}>
                  <FaFacebookF
                    size={17}
                    className="text-[#101010] hover:text-[#FF6700]"
                  />
                </Link>
                <Link href={"/"}>
                  <FaXTwitter
                    size={18}
                    className="text-[#101010] hover:text-[#FF6700]"
                  />
                </Link>
                <Link href={"/"}>
                  <FaLinkedinIn
                    size={18}
                    className="text-[#101010] hover:text-[#FF6700]"
                  />
                </Link>
                <Link href={"/"}>
                  <FaYoutube
                    size={18}
                    className="text-[#101010] hover:text-[#FF6700]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold capitalize">quick links</p>
            <div className="flex items-center gap-2 my-2">
              <p className="h-0 w-5 border-t-2 border-[#F26B01]"></p>
              <p className="h-0 w-14 border-t-2 border-[#101010]"></p>
            </div>
            <div className="mt-4">
              {links.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mb-4">
                    <MdOutlineKeyboardDoubleArrowRight />
                    <Link href={item.href} className="hover:text-[#F26B01]">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-semibold capitalize">our services</p>
            <div className="flex items-center gap-2 my-2">
              <p className="h-0 w-5 border-t-2 border-[#F26B01]"></p>
              <p className="h-0 w-14 border-t-2 border-[#101010]"></p>
            </div>
            <div className="mt-4">
              {services.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 mb-4">
                    <MdOutlineKeyboardDoubleArrowRight />
                    <Link href={item.href} className="hover:text-[#F26B01]">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-medium capitalize max-w-[210px]">
              Keep Abreast with Latest in Digital Transformation
            </p>
            <div className="flex items-center gap-2 my-2">
              <p className="h-0 w-5 border-t-2 border-[#F26B01]"></p>
              <p className="h-0 w-14 border-t-2 border-[#101010]"></p>
            </div>
            <div className="flex h-12 p-1 mt-4 bg-[#FFFFFF] rounded-full">
              <input
                type="email"
                className="h-full px-2 rounded-full focus:outline-none "
              />
              <div className="w-10 h-10 rounded-full bg-[#F26B01] text-[#FFFFFF] flex justify-center items-center">
                <FaRegPaperPlane size={17} />
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 w-full mt-10 px-60">
          <p className="border-t border-[#101010]/40 w-[90%]"></p>
          <div className="capitalize text-[#101010] text-[14px]  flex justify-between py-3">
            <p>&copy; All Copyright 2024 by Webxcell Digital</p>
            <p>Privacy Notice | Terms & Conditions | Cookies Policy</p>
          </div>
        </div>
        <div className="absolute top-20 right-24">
          <Image src={letterPic} alt="letterPic" height={95} />
        </div>
        <div className="absolute right-0 -top-10">
          <Image src={LinesPic} alt="linesPic" height={400} />
        </div>
        <div className="absolute left-0 -top-16 scale-x-[-1] z-10">
          <Image src={LinesPic} alt="linesPic" height={400} />
        </div>
        <div className="bg-[#00BFFF] h-[976px] w-[976px] rounded-full absolute -top-14 left-[-531px] z-0 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Footer;
