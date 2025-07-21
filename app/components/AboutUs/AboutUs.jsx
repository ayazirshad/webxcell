import Image from "next/image";
import mediaPic from "../../../public/aboutUs/Media.png";
import dawnPic from "../../../public/aboutUs/Dawn.png";
import portalPic from "../../../public/aboutUs/Portal.png";
import spiral from "../../../public/aboutUs/spiral3.png";
import wavy from "../../../public/aboutUs/waves.png";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const AboutUs = () => {
  const gains = [
    {
      count: "200+",
      text: "Successful marketing campaigns",
    },
    {
      count: "75%",
      text: "Average increase in website traffic",
    },
  ];
  return (
    <div
      className="w-full bg-[#FFFFFF] py-20 md:flex justify-center items-center relative px-5 md:px-10"
      id="about"
    >
      <div className="md:flex gap-7 max-w-[970px]">
        <div className="md:w-[48%] relative">
          <Image src={mediaPic} alt="mediaPic" className="z-10 h-full " />
          <div className="absolute z-10 h-12 md:h-16 top-1 left-3">
            <Image
              src={portalPic}
              alt="portalPic"
              className="object-contain h-full w-min"
            />
          </div>
          <div className="absolute right-0 z-10 h-12 md:h-16 bottom-1">
            <Image
              src={dawnPic}
              alt="dawnPic"
              height={67}
              className="object-contain h-full w-min "
            />
          </div>
          <div className="h-52 w-52 bg-linear-to-b from-[#FF6700]/50 to-[#F8F8FF]/5 absolute rounded-full top-10 -left-20 z-0 blur-xl"></div>
        </div>
        <div className="md:w-[52%] py-3">
          <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C]  to-[#6461FC] to-80% uppercase w-max">
            about us
          </p>
          <h2 className="capitalize text-[#101010] text-[32px] md:text-[37px] lg:text-[42px] font-bold">
            we’re a strategic digital{" "}
            <span className="text-[#FF6700]">Media</span> agency
          </h2>
          <p className="text-[16px] font-thin text-[#101010]  mt-2">
            In order to scale new customer acquisition and retention for
            e-commerce brands, we work across the entire customer journey. Our
            team has a successful track record of helping brands scale
          </p>
          <div className="flex gap-12 mt-2">
            {gains.map((item, index) => {
              return (
                <div key={index}>
                  <p
                    className="text-[40px] md:text-[45px] lg:text-[50px] font-bold text-[#101010]"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.count}
                  </p>
                  <p className="text-[16px] text-[#101010] max-w-[177px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="relative mt-8">
            <div className="flex h-12 w-max text-[#FFFFFF]">
              <button className="uppercase bg-[#FF6700] text-[16px] font-bold h-full px-5 rounded-full hover:cursor-pointer">
                about us
              </button>
              <div className="bg-[#888B87] aspect-square rounded-full">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full rounded-full"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
            </div>
            <div className="absolute object-cover w-20 h-20 rounded-full right-3 -top-14">
              <Image
                src={mediaPic}
                className="object-cover rounded-full"
                alt="mediaPic"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={spiral}
        className="absolute hidden left-10 bottom-28 md:block"
        height={128}
        alt="spiral"
      />
      <Image
        src={wavy}
        className="absolute right-0 hidden bottom-44 md:block"
        height={40}
        alt="wavy"
      />
    </div>
  );
};

export default AboutUs;
