import React, { useState } from "react";
import firsthand from "../assets/firsthand.webp";
import { BiToggleRight, BiToggleLeft } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";
import Image from "next/image";
import github from "../assets/github (1).png";
import linkedin from "../assets/linkedin (3).png";
import youtube from "../assets/youtube.png";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="text-white overflow-hidden ">
      <div className="absolute left-0 top-[6rem] md:top-[4rem] w-[10rem] h-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[14rem] md:w-[14rem] bg-no-repeat bg-contain bg-[url('../assets/firsthand.webp')] "></div>

      <div className="pt-[12.3rem] pl-[1.7rem]    vs:pl-[3rem] sm:pl-[4rem] ">
        <div className="max-w-[27rem] sm:max-w-[35rem] md:max-w-[37rem]">
          <div className="text-white text-[38px] sm:text-[50px] md:text-[70px] sm:leading-[55px] md:leading-[70px] leading-[43px]  ">
            <span>Turning ideas into </span>
            <span>real life </span>
            <h1 id="products" className="inline-block">
              products
            </h1>
            <span> is my calling</span>
          </div>
        </div>
        <div className="pt-20 max-w-[7rem]">
          <p className="text-[#c4c4c4] text-[14px] leading-[12px] cursor-pointer">
            VIEW PROJECTS
          </p>
          <div className="border-b pt-2 max-w-[3rem] hover:max-w-[6rem]    duration-500 ease-out"></div>
        </div>

        <div className="flex justify-between items-center   pt-28 w-full -mt-[0.9rem]">
          <div className=" w-[10rem] " onClick={() => setIsOpen(!isOpen)}>
            <div className="">
              {isOpen ? (
                <div className="relative">
                  <BiToggleRight className="w-[4rem] h-[4rem]" />

                  <BsSun className="absolute w-[1rem] h-[1rem] top-6 left-4" />
                </div>
              ) : (
                <div className="relative">
                  <BiToggleLeft className="w-[4rem] h-[4rem]" />

                  <HiOutlineMoon className="absolute w-[1rem] h-[1rem] top-6 left-[2.25rem]" />
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-6 pr-[1.7rem]   vs:pr-[3rem] sm:pr-[4rem]">
            <div className="w-7 h-7">
              <Image src={github} />
            </div>
            <div className="w-7 h-7">
              <Image src={linkedin} />
            </div>
            <div className="w-7 h-7">
              <Image src={youtube} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-center items-center  right-0 top-[21rem] w-[15rem] bg-right  h-[15rem]  sm:h-[18rem] sm:w-[18rem] md:h-[22rem] md: w-[23rem] bg-no-repeat bg-contain bg-[url('../assets/secondhand.webp')] overflow-hidden    bg-no-repeat pr-[6rem] "></div>
    </div>
  );
};

export default Hero;
