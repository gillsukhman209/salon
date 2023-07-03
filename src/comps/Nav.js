import React from "react";
import { Link } from "react-scroll";
function Nav({ onHomeClick, onServicesClick, onPortfolioClick }) {
  return (
    <div className="w-full h-30 bg-white flex-col  fixed top-0 z-10  ">
      <div className="w-full h-14 bg-black font-manrope flex text-[15px] gap-24 tracking-widest  text-white ">
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
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            SERVICES
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            PORTFOLIO
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
          <Link
            activeClass="active"
            to="appointment"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={500}
          >
            BOOK ONLINE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
