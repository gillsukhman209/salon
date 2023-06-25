import React from "react";
import Nav from "../comps/Nav";
import BackgroundImage from "../comps/BackgroundImage";

function Homepage() {
  return (
    <div className="w-full h-screen bg-red-400">
      <BackgroundImage />
      <div className="absolute top-0 ">Hello</div>
    </div>
  );
}

export default Homepage;
