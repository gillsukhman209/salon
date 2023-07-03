import React from "react";
import PortfolioImage from "../comps/PortfolioImage";
import Image1 from "../portfolio-images/image1.jpeg";
import Image2 from "../portfolio-images/image2.jpeg";
import Image3 from "../portfolio-images/image3.jpeg";
import Image4 from "../portfolio-images/image4.jpeg";
import Image5 from "../portfolio-images/image5.jpeg";
import Image6 from "../portfolio-images/image6.jpeg";

function Portfolio() {
  return (
    <div className="w-full  flex-col gap-20">
      <div className="h-full w-full">
        <div className="flex flex-col gap-10  w-full items-center justify-center h-[50%]">
          <div className="font-manrope text-[22px] text-[#dc80ba] ">
            Portfolio
          </div>
          <div className="font-cormorant text-[64px] text-[#242424] flex flex-col items-center">
            <div>Our Latest Works</div>
          </div>
        </div>
        <div className="w-full h-full items-center justify-center flex  flex-wrap">
          <PortfolioImage img={Image1} />
          <PortfolioImage img={Image2} />
          <PortfolioImage img={Image3} />
          {/* <PortfolioImage img={Image4} />
        <PortfolioImage img={Image5} />
        <PortfolioImage img={Image6} /> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
