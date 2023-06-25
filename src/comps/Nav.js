import React from "react";

function Nav() {
  return (
    <div className="w-full h-30 bg-white flex-col  ">
      <div className="w-full h-14 bg-[#242424] font-manrope flex text-[15px] gap-24 tracking-widest  text-white ">
        <div className="w-full h-full flex items-center justify-end">
          <div></div>
          <div>OPENING HOURS: Monday - Friday, 08am - 05pm</div>
        </div>
        <div className="w-full h-full flex items-center justify-start">
          <div></div>
          <div>ADDRESS: 55 Main Street, 2nd Block, New York</div>
        </div>
      </div>
      <div className="Navbar w-full h-24 flex">
        <div className="font-inika w-full h-full text-2xl   flex items-center ml-14 ">
          PALAK'S BEAUTY AND HAIR STUDIO
        </div>
        <div class=" w-full h-full font-manrope  pr-8 flex justify-center gap-16   items-center text-center  text-black text-[17px]  tracking-wide ">
          <div class="cursor-pointer hover:text-3xl">HOME</div>
          <div class=" cursor-pointer hover:text-3xl"> HAIRCUT</div>

          <div class="cursor-pointer hover:text-3xl "> SERVICES</div>

          <div class="cursor-pointer  hover:text-3xl"> ABOUT</div>

          <div class="cursor-pointer   hover:text-3xl "> BOOK ONLINE</div>

          <div class=" cursor-pointer hover:text-3xl"> CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
