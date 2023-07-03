import React from "react";
import ServiceCard from "../comps/ServiceCard";
import Nailpolish from "../images/nail-polish.svg";
import Eyebrow from "../images/eyebrow.svg";
import Hairdresser from "../images/hair-dresser.svg";
import Massage from "../images/massage.svg";
import Cosmetics from "../images/cosmetics.svg";
function Services() {
  return (
    <div className="w-full h-full  flex flex-col flex-wrap items-center justify-center  ">
      <div className="h-full w-full flex-wrap">
        <div className="flex flex-col gap-10  w-full items-center justify-center h-[50%]">
          <div className="font-manrope text-[22px] text-[#d36ac4] ">
            Our Services
          </div>
          <div className="font-cormorant xl:text-[64px] text-[36px] text-[#242424] flex flex-col items-center">
            <div>Popular Services We Provide</div>
            <div>For Customers</div>
          </div>
        </div>
        <div className="w-full h-full flex-wrap   gap-10 items-center mt-40 flex ">
          <div className="w-full    xl:mr-40 xl:ml-40 flex xl:flex-row flex-col gap-10 xl:items-center xl:justify-center  flex-wrap">
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
