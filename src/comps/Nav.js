import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import menuButton from "../portfolio-images/hamburger.png";
function Nav({ onHomeClick, onServicesClick, onPortfolioClick }) {
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsOnHeroSection(scrollPosition < 850);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full h-30 bg-white flex-col fixed top-0 z-10 ${
        isOnHeroSection ? "" : "bg-[#fcd6e7] "
      }`}
    >
      <div className="w-full xl:h-14 h-14 bg-black font-manrope flex xl:flex-row flex-col text-sm xl:text-[15px] xl:gap-24 xl:tracking-widest  text-white ">
        <div className="w-full h-full flex items-center justify-center xl:justify-end">
          <div>OPENING HOURS: Monday - Friday, 09:30am - 08:00pm</div>
        </div>
        <div className="w-full h-full flex items-center justify-center xl:justify-start">
          <div>ADDRESS: 998 Keewatin St #9, Winnipeg</div>
        </div>
      </div>

      <div className=" w-full h-24 flex items-center justify-center ">
        <div className="font-inika w-full h-full text-xl  xl:text-2xl   flex items-center ml-14 ">
          PALAK'S BEAUTY AND HAIR STUDIO
        </div>
        <div className="xl:hidden w-full h-full flex items-center justify-center ">
          <img src={menuButton} width={20}></img>
        </div>
        <div class="hidden xl:flex w-full h-full font-manrope  pr-8  justify-center gap-16   items-center text-center  text-black text-[17px]  tracking-widest ">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
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
            className="cursor-pointer"
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
            className="cursor-pointer"
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
            className="cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
