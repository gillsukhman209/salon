import React from "react";

function ServiceCard({ bg, title, desc }) {
  return (
    <div className="xl:w-[30%] 2xl:w-[25%] w-[75%]  xl:mx-0 mx-auto flex-wrap h-[400px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-pink-300 duration-300   bg-[#f9dae9] rounded-2xl shadow-2xl flex  flex-col gap-10 items-center justify-center">
      <img src={bg} width={100} className="mt-10" />
      <div className="w-full h-[100px] flex-col text-center  ">
        <p className="xl:text-[34px] h-[50%] w-full font-cormorant">{title}</p>
        <p className="xl:text-[17px] h-[50%]  w-full font-manrope text-[#696969]">
          {desc}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
