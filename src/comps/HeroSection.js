import React from "react";
import Nav from "./Nav";

import BackgroundImage from "./BackgroundImage";
const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[#f9dae9] ">
      <div className="w-full h-full flex justify-end ">
        <div className=" flex flex-col justify-center items-center w-full">
          <div className="w-full font-cormorant text-black-50 text-[88px] tracking-widest flex flex-col  justify-center ">
            <div className="w-full flex items-center justify-center">
              Health Care{" "}
            </div>
            <div className="w-full flex items-center justify-center">&</div>
            <div className="w-full flex items-center justify-center">
              Beauty Salon
            </div>
          </div>

          <div className=" mt-14 cursor-pointer bg-transparent border-black border-[1px] w-[30%] h-20 rounded-full flex items-center justify-center tracking-widest font-normal text-2xl">
            Book Appointment
          </div>
        </div>
        <div className="w-full h-full flex items-center cursor-pointer ">
          <BackgroundImage />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
