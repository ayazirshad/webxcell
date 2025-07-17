import { FaStarOfLife } from "react-icons/fa";
import { markee } from "./services.module.css";
import seoPic from "../../../public/services/SEO.png";
import contentPic from "../../../public/services/content.png";
import clientPic from "../../../public/services/clients.png";
import bigBlob from "../../../public/services/bigBlob.png";
import Blob9 from "../../../public/services/Blob9.png";
import line from "../../../public/services/line.png";
import smallBlob from "../../../public/services/smallBlob.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  const marqeeTags = ["web api", "design", "development", "strategy"];
  return (
    <div className="w-full bg-[#F26B01]/7 py-20 flex flex-col justify-center items-center relative">
      <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C]  to-[#6461FC] to-80% uppercase w-max">
        services
      </p>
      {/* marquee  */}
      <div className=" w-full h-max pt-[6px]">
        <marquee behavior="scroll">
          <div className="flex gap-24">
            {marqeeTags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-8 h-full text-[55px] font-semibold text-[#101010] uppercase items-center ${
                    index % 2 != 0 && `${markee} text-[#F26B01]`
                  }`}
                >
                  <p className="h-full text-[45px] text-[#101010]">
                    <FaStarOfLife />
                  </p>
                  {tag}
                </div>
              );
            })}
          </div>
        </marquee>
      </div>
      <div className="w-[970px] mt-5 z-20">
        {/* SEO part  */}
        <div className="flex gap-4">
          <div className="w-2/3 bg-[#FFFFFF] rounded-[20px] pl-5 flex gap-3 border border-[#FFFFFF] hover:border-[#F29F5C] transition-all duration-200">
            <div className="pt-4 flex-1">
              <h3 className="text-2xl font-semibold capitalize text-[#17012C]">
                SEO & Analytics
              </h3>
              <p className="text-sm text-[#101010] mt-3 capitalize leading-5">
                In order to scale new customer acquisition and retention for
                e-commerce brands, we work across the entire customer journey.
                Our team has a successful
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="bg-[#F26B01] aspect-square rounded-full h-11">
                  <Link
                    href={"/"}
                    className="w-full h-full text-[#FFFFFF] rounded-full flex justify-center items-center"
                  >
                    <GoArrowUpRight size={23} />
                  </Link>
                </div>
                <p
                  className={`text-[50px] font-bold text-[#101010]/20 ${markee}`}
                >
                  01
                </p>
              </div>
            </div>
            <div>
              <Image src={seoPic} alt="seoPic" height={226} />
            </div>
          </div>
          <div className="w-1/3 bg-[#FFFFFF] rounded-[20px] pt-4 pl-5 pr-8 border border-[#FFFFFF] hover:border-[#F29F5C] transition-all duration-200">
            <h3 className="text-2xl font-semibold capitalize text-[#17012C]">
              Digital Strategy
            </h3>
            <p className="text-sm text-[#101010] mt-3 capitalize leading-5">
              In order to scale new customer acquisition and retention for
              e-commerce brands, we work across thel
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="bg-[#101010] aspect-square rounded-full h-11">
                <Link
                  href={"/"}
                  className="w-full h-full text-[#FFFFFF] rounded-full flex justify-center items-center"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
              <p
                className={`text-[50px] font-bold text-[#101010]/20 ${markee}`}
              >
                02
              </p>
            </div>
          </div>
        </div>
        {/* strategy part  */}
        <div className="flex gap-4 mt-4">
          <div className="w-1/3 bg-[#FFFFFF] rounded-[20px] pt-4 pl-5 pr-8 border border-[#FFFFFF] hover:border-[#F29F5C] transition-all duration-200">
            <h3 className="text-2xl font-semibold capitalize text-[#17012C]">
              Strategy Creation
            </h3>
            <p className="text-sm text-[#101010] mt-3 capitalize leading-5">
              In order to scale new customer acquisition and retention for
              e-commerce brands, we work across thel
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="bg-[#101010] aspect-square rounded-full h-11">
                <Link
                  href={"/"}
                  className="w-full h-full text-[#FFFFFF] rounded-full flex justify-center items-center"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
              <p
                className={`text-[50px] font-bold text-[#101010]/20 ${markee}`}
              >
                03
              </p>
            </div>
          </div>
          <div className="w-2/3 bg-[#FFFFFF] rounded-[20px] pl-5 flex gap-5 border border-[#FFFFFF] hover:border-[#F29F5C] transition-all duration-200">
            <div className="pt-4 flex-1 pr-5 ">
              <h3 className="text-2xl font-semibold capitalize text-[#17012C]">
                Content Creation
              </h3>
              <p className="text-sm text-[#101010] mt-3 capitalize leading-5">
                In order to scale new customer acquisition and retention for
                e-commerce brands, we work across the entire customer journey.
                Our team has a successful track record of delivering successful
                business outcomes.
              </p>
              <div className="flex justify-between items-center ">
                <div className="bg-[#101010] aspect-square rounded-full h-11">
                  <Link
                    href={"/"}
                    className="w-full h-full text-[#FFFFFF] rounded-full flex justify-center items-center"
                  >
                    <GoArrowUpRight size={23} />
                  </Link>
                </div>
                <p
                  className={`text-[50px] font-bold text-[#101010]/20 ${markee}`}
                >
                  04
                </p>
              </div>
            </div>
            <div>
              <Image src={contentPic} alt="seoPic" height={226} />
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[#101010]/80 text-[#FFFFFF] rounded-[20px] flex items-center justify-center py-8">
          <div className="w-[594px] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src={clientPic} height={50} />
              <p className="capitalize text-[16px]">1.5k Happy Clients</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="uppercase text-[16px]">view all services</p>
              <div className="bg-[#FF6700] aspect-square rounded-full h-11">
                <Link
                  href={"/"}
                  className="w-full h-full text-[#FFFFFF] rounded-full flex justify-center items-center"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* left side  */}
      <Image
        src={smallBlob}
        alt="smallBlob"
        height={120}
        className="absolute top-80 left-16"
      />
      <Image
        src={line}
        alt="line"
        height={650}
        className="absolute top-0 left-0"
      />
      <Image
        src={line}
        alt="line"
        height={650}
        className="absolute top-0 left-4"
      />
      <Image
        src={bigBlob}
        alt="bigBlob"
        height={650}
        className="absolute bottom-0 left-4 z-0"
      />

      {/* right side  */}
      <Image
        src={smallBlob}
        alt="smallBlob"
        height={120}
        className="absolute bottom-80 right-10 z-10"
      />
      <Image
        src={line}
        alt="line"
        height={650}
        className="absolute bottom-0 right-0 rotate-180 z-10"
      />
      <Image
        src={line}
        alt="line"
        height={650}
        className="absolute bottom-0 right-4 rotate-180 z-10"
      />
      <Image
        src={Blob9}
        alt="Blob9"
        height={650}
        className="absolute bottom-20 right-4 blur-2xl z-0"
      />
    </div>
  );
};

export default Services;
