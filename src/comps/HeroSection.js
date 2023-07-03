import React from "react";
import Nav from "./Nav";
import BackgroundImage from "./BackgroundImage";

const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[#f9dae9]">
      <div className="w-full h-full xl:flex xl:flex-row flex-col xl:justify-end">
        <div className="h-full flex flex-col justify-center items-center w-full">
          <div className="w-full font-cormorant text-black-50 xl:text-[88px] text-[50px] xl:tracking-widest tracking-wide flex flex-col justify-center">
            <div className="w-full flex items-center justify-center">
              Health Care
            </div>
            <div className="w-full flex items-center justify-center">&</div>
            <div className="w-full flex items-center justify-center">
              Beauty Salon
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-300 duration-300 mt-14 cursor-pointer hover:text-white bg-transparent border-black border-[1px] xl:w-[30%] w-[60%] xl:h-20 h-14 rounded-full flex items-center justify-center tracking-widest font-normal xl:text-2xl">
            Contact Us
          </div>
        </div>
        <div className="hidden xl:flex w-full h-full items-center cursor-pointer">
          <BackgroundImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
