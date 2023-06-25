import React from "react";

function BackgroundImage() {
  return (
    <div
      className="absolute h-[70%] w-[50%]   overflow-hidden  bg-cover  "
      style={{
        backgroundImage:
          "url('https://lesya.bslthemes.com/wp-content/uploads/2023/05/receiving-facial-mask-at-beauty-salon-1.jpg')",
      }}
    ></div>
  );
}

export default BackgroundImage;
