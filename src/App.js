import React, { useState, useEffect, useRef } from "react";
import HeroSection from "./comps/HeroSection";
import Services from "./pages/Services";
import Nav from "./comps/Nav";
import Portfolio from "./pages/Portfolio";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <section id="hero" className="h-full">
        <HeroSection />
      </section>
      <section id="services" className="mt-40">
        <Services />
      </section>
      <section id="portfolio" className="mt-40">
        <Portfolio />
      </section>
      {/* <section id="appointment" className="w-full h-full">
        <BookAppointment />
      </section> */}
    </div>
  );
}

export default App;
