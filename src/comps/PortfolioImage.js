import React from "react";

function PortfolioImage({ img }) {
  return (
    <div className="mr-20 ml-20 shadow-2xl flex gap-10 items-center justify-center">
      <img src={img} width={200} className="h-full w-full "></img>
    </div>
  );
}

export default PortfolioImage;
