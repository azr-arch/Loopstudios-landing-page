import React from "react";
import Header from "./Header";

const Hero = ({ mobileNav, handleClick }) => {
  return (
    <div className="hero">
      <Header mobileNav={mobileNav} handleClick={handleClick} />

      <div className="hero--title-wrapper">
        <p className="hero--title">
          IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
        </p>
      </div>
    </div>
  );
};

export default Hero;
