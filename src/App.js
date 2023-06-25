import React, { useState, useEffect } from "react";
import HeroSection from "./comps/HeroSection";

import Nav from "./comps/Nav";

function App() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <HeroSection />
    </div>
  );
}

export default App;
