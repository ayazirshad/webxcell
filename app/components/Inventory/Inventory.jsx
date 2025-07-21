import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import digitalPic from "../../../public/inventory/text-message 1.png";
import marketingPic from "../../../public/inventory/Digital Marketing.png";
import inventoryPic1 from "../../../public/inventory/inventoryPic.png";
import inventoryPic2 from "../../../public/inventory/image.png";
import textPic from "../../../public/inventory/Group 164702.png";
import iconPic from "../../../public/inventory/Group 1.png";
import spiral from "../../../public/aboutUs/spiral3.png";
import star from "../../../public/aboutUs/Portal.png";

const Inventory = () => {
  const gains = [
    {
      count: "94%",
      text: "digital transformation",
      pic: digitalPic,
    },
    {
      count: "65%",
      text: "Marketing strategy",
      pic: marketingPic,
    },
  ];
  return (
    <div className="w-full bg-[#FFFFFF] flex justify-center items-center py-16 md:py-24 px-5 md:px-10">
      <div className="md:flex max-w-[970px]">
        <div className="flex flex-col justify-center w-full py-3 md:w-1/2">
          <p className="text-[16px] font-semibold bg-linear-to-r bg-clip-text text-transparent from-[#F29F5C]  to-[#6461FC] to-80% uppercase w-max">
            your inventory is time
          </p>
          <h2 className="capitalize text-[#101010] text-[42px] font-bold pr-3">
            digital agency services
          </h2>
          <p className="text-[16px] font-medium text-[#101010] mt-2 pr-2">
            And you spend over half of it on non-core functions like Following
            up for Payments or Writing Proposals from scratch or sending Manual
            Updates to your Clients.
          </p>
          <div className="flex flex-col justify-between gap-5 mt-8 md:gap-0 md:flex-row">
            {gains.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-12 aspect-square bg-[#EAF3F8] rounded-full p-[10px]">
                    <Image src={item.pic} alt={item.text} />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#101010]">
                      {item.count}
                    </p>
                    <p className="text-sm text-[#101010] uppercase">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <div className="flex h-12 w-max text-[#FFFFFF]">
              <button className="uppercase bg-[#FF6700] text-[16px] font-bold h-full px-5 rounded-full hover:cursor-pointer">
                get started
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
          </div>
        </div>
        <div className="relative flex justify-around w-full px-0 mt-5 md:justify-between md:mt-0 md:w-1/2 lg:px-14">
          <div className="rounded-full bg-[#FEF5ED] px-2 pb-7 h-min">
            <Image src={inventoryPic2} alt="inventoryPic2" height={280} />
          </div>
          <div className="h-full flex flex-col justify-between md:pb-12 absolute left-[46%] sm:left-[40%] md:left-[38%] md:w-[120px]">
            <Image
              src={spiral}
              alt="spiral"
              height={80}
              className="ml-auto rotate-45"
            />
            <Image src={star} alt="star" height={40} />
          </div>
          <div className="rounded-full bg-[#FEF5ED] px-2 pt-7 h-min mt-auto">
            <Image src={inventoryPic1} alt="inventoryPic1" height={280} />
          </div>
          <div className="h-24 w-24 bg-[#FFFFFF] absolute rounded-full left-[36%] sm:left-[38%] md:left-[40%] top-28 md:top-44 p-1">
            <div className="relative flex items-center justify-center rounded-full">
              <Image src={textPic} alt="textPic" />
              <Image
                src={iconPic}
                alt="iconPic"
                className="absolute"
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
