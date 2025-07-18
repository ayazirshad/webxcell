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
    <div className="bg-[#FFFFFF] w-full pt-24">
      <div className="w-full bg-[#F26B01]/10 flex justify-center relative">
        <div className="flex items-center max-w-[970px] px-10 z-10">
          <div className="w-1/2 flex justify-center relative">
            <Image
              src={womanPic}
              alt="womanPic"
              height={420}
              className="z-10"
            />
            <Image
              src={bigBlob}
              alt="bigBlob"
              className="absolute -left-20 bottom-0 z-0"
              height={325}
            />
            <Image
              src={blob9}
              alt="blob9"
              className="absolute top-20 z-0"
              height={260}
            />
          </div>
          <div className="w-1/2 ">
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
                  className="w-full h-full rounded-full flex justify-center items-center"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image src={bigSpirals} alt="bigSpirals" className="absolute" />
        <Image
          src={wavesPic}
          alt="wavesPic"
          className="absolute left-0 top-52"
          height={18}
        />
        <Image
          src={spiral}
          alt="spiral"
          className="absolute right-32 bottom-10"
          height={98}
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
