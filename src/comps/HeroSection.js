import React from "react";
import Nav from "./Nav";
import BackgroundImage from "./BackgroundImage";
const HeroSection = () => {
  return (
    <div className="w-full h-[70%] bg-[#F2EAE5]  ">
      <div className="w-full h-full flex justify-end ">
        <div className=" flex flex-col justify-center items-center w-full">
          <div class="w-full  text-center font-inika text-black-50 text-[100px] font-normal tracking-widest">
            Health Care & Beauty Salon
          </div>

          <div className=" mt-14 bg-transparent border-black border-[1px] w-[30%] h-20 rounded-full flex items-center justify-center tracking-widest font-normal text-2xl">
            Book Now
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
//  {/* <div className="h-screen w-full">
//         {/* Your fixed components */}
//         <Nav className="w-full h-20 absolute top-0 right-0 left-0" />
//         <HeroSection />
//       </div>
