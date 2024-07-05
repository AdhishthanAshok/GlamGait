import React from "react";
import Banner_img from "./assets/Banner.png";
import Phone_Banner_img from "./assets/phone_banner.png";

const Hero = () => {
  return (
    <div className="height: calc(100vh - 60px);">
      {/* Show Banner_img for tablet (md), laptop (lg), and monitor (xl) */}
      <div className="hidden md:block">
        <img
          src={Banner_img}
          alt="Image for tablets, laptops, and monitors"
          className="w-full"
        />
      </div>
      {/* Show Phone_Banner_img for mobile devices (sm and smaller) */}
      <div className="block md:hidden">
        <img
          src={Phone_Banner_img}
          alt="Image for mobile devices"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
