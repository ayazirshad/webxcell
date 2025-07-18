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
    <div className="w-full bg-[#FFFFFF] flex justify-center items-center py-24">
      <div className="flex max-w-[970px]">
        <div className="w-1/2 py-3 flex flex-col justify-center">
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
          <div className="flex justify-between mt-8">
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
                  className="w-full h-full rounded-full flex justify-center items-center"
                >
                  <GoArrowUpRight size={23} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-between px-14 relative">
          <div className="rounded-full bg-[#FEF5ED] px-2 pb-7 h-min">
            <Image src={inventoryPic2} alt="inventoryPic2" height={280} />
          </div>
          <div className="h-full flex flex-col justify-between pb-12 absolute left-[38%] min-w-[120px]">
            <Image
              src={spiral}
              alt="spiral"
              height={80}
              className="rotate-45 ml-auto"
            />
            <Image src={star} alt="star" height={40} />
          </div>
          <div className="rounded-full bg-[#FEF5ED] px-2 pt-7 h-min mt-auto">
            <Image src={inventoryPic1} alt="inventoryPic1" height={280} />
          </div>
          <div className="h-24 w-24 bg-[#FFFFFF] absolute rounded-full left-48 top-44 p-1">
            <div className="relative flex justify-center items-center rounded-full">
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
