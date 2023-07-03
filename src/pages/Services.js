import React from "react";
import ServiceCard from "../comps/ServiceCard";
import Nailpolish from "../images/nail-polish.svg";
import Eyebrow from "../images/eyebrow.svg";
import Hairdresser from "../images/hair-dresser.svg";
import Massage from "../images/massage.svg";
import Cosmetics from "../images/cosmetics.svg";
function Services() {
  return (
    <div className="w-full   flex-col items-center justify-center mt-40">
      <div className="h-full w-full">
        <div className="flex flex-col gap-10  w-full items-center justify-center h-[50%]">
          <div className="font-manrope text-[22px] text-[#d36ac4] ">
            Our Services
          </div>
          <div className="font-cormorant text-[64px] text-[#242424] flex flex-col items-center">
            <div>Popular Services We Provide</div>
            <div>For Customers</div>
          </div>
        </div>
        <div className="w-full h-[50%] flex gap-10 items-center mt-40">
          <div className="w-full mr-40 ml-40 flex gap-10 items-center justify-center  flex-wrap">
            <ServiceCard
              bg={Nailpolish}
              title={"Nail Polish"}
              desc={"High Quality Nail Polish"}
            />
            <ServiceCard
              bg={Eyebrow}
              title={"Brow Polish"}
              desc={"Best Brow Polish"}
            />
            <ServiceCard
              bg={Massage}
              title={"Foot Massage"}
              desc={"Relaxing Foot Massage"}
            />
            <ServiceCard
              bg={Hairdresser}
              title={"Hair Dresser"}
              desc={"High Quality Hair Dresser"}
            />
            <ServiceCard
              bg={Cosmetics}
              title={"Cosmetics"}
              desc={"Best in the business cosmetics"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
