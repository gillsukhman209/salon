import React from "react";

function Nav() {
  return (
    <div className="w-full h-24 bg-white flex  ">
      <div className="font-inika w-[50%] h-full text-2xl   flex items-center ml-14 ">
        PALAK'S BEAUTY AND HAIR STUDIO
      </div>
      <div class=" w-full h-full font-hubbali  pr-8 flex justify-center gap-16   items-center text-center  text-black text-[24px]  tracking-wide ">
        <div class="cursor-pointer hover:text-3xl">HOME</div>
        <div class=" cursor-pointer hover:text-3xl"> HAIRCUT</div>

        <div class="cursor-pointer hover:text-3xl "> SERVICES</div>

        <div class="cursor-pointer  hover:text-3xl"> ABOUT</div>

        <div class="cursor-pointer w-40  hover:text-3xl "> BOOK ONLINE</div>

        <div class=" cursor-pointer hover:text-3xl"> CONTACT</div>
      </div>
      {/* <div class="w-full  h-[0px] border border-black"></div> */}
    </div>
  );
}

export default Nav;
