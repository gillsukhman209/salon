import React from "react";

function ServiceCard({ bg, title, desc }) {
  return (
    <div className="w-[25%] h-full bg-[#f9dae9] rounded-2xl shadow-2xl flex  flex-col gap-10 items-center justify-center">
      <img src={bg} width={200} className="mt-10" />
      <div className="w-full h-[100px] flex-col text-center  ">
        <p className="text-[34px] h-[50%] w-full font-cormorant">{title}</p>
        <p className="text-[17px] h-[50%]  w-full font-manrope text-[#696969]">
          {desc}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
