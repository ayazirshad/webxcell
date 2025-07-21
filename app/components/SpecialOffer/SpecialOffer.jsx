import Image from "next/image";
import bigSpirals from "../../../public/specialOffer/Rectangle 4512.png";
import womanPic from "../../../public/specialOffer/woman.png";
import wavesPic from "../../../public/specialOffer/Waves.png";
import bigBlob from "../../../public/specialOffer/bigBlob.png";
import blob9 from "../../../public/specialOffer/Blob9.png";
import spiral from "../../../public/specialOffer/Spiral1.png";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const SpecialOffer = () => {
  return (
    <div className="bg-[#FFFFFF] w-full pt-24 ">
      <div className="w-full bg-[#F26B01]/10 flex justify-center relative pt-5 px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center max-w-[970px]  z-10">
          <div className="relative flex justify-center order-2 w-full md:w-1/2 md:order-1">
            <Image
              src={womanPic}
              alt="womanPic"
              height={420}
              className="z-10"
            />
            <Image
              src={bigBlob}
              alt="bigBlob"
              className="absolute bottom-0 z-0 -left-20"
              height={325}
            />
            <Image
              src={blob9}
              alt="blob9"
              className="absolute z-0 top-20"
              height={260}
            />
          </div>
          <div className="order-1 w-full md:w-1/2 md:order-2">
            <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C]  to-[#6461FC] to-80% uppercase w-max">
              get the special offer
            </p>
            <h2 className="capitalize text-[#101010] text-[42px] font-bold pr-3 mt-2">
              25% off for your{" "}
              <span className="bg-linear-to-r from-[#F26B01] to-[#F5AF19] bg-clip-text text-transparent">
                First
              </span>{" "}
              service
            </h2>
            <div className="flex h-12 w-max text-[#FFFFFF] mt-5">
              <button className="uppercase bg-[#FF6700] text-[16px] font-bold h-full px-5 rounded-full hover:cursor-pointer">
                get started
              </button>
              <div className="bg-[#00BFFF] aspect-square rounded-full">
                <Link
                  href={"/"}
                  className="flex items-center justify-center w-full h-full rounded-full"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <Image
            src={bigSpirals}
            alt="bigSpirals"
            className="absolute left-0 object-cover h-full"
          />
        </div>
        <Image
          src={wavesPic}
          alt="wavesPic"
          className="absolute left-0 hidden top-52 md:block"
          height={18}
        />
        <Image
          src={spiral}
          alt="spiral"
          className="absolute hidden right-32 bottom-10 md:block"
          height={98}
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
