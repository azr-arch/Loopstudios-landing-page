import React from "react";
import Navbar from "./utils/Navbar";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Header = ({ mobileNav, handleClick }) => {
  console.log("mobilenav ", mobileNav);
  return (
    <>
      <header>
        <div className="header--logo-wrapper">
          <img src={logo} alt="logo" />
        </div>

        <div className="mobile-nav" onClick={handleClick}>
          <img src={mobileNav ? close : hamburger} alt="nav-menu-btns" />
        </div>

        <Navbar ariaExpanded={mobileNav} />
      </header>
    </>
  );
};

export default Header;
