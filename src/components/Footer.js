import React from "react";

import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

import Navbar from "./utils/Navbar";

const Footer = () => {
  return (
    <footer>
      <div className="footer--links">
        <img src={logo} alt="logo" />

        <ul className="footer--social-links">
          <li>
            <img src={fb} alt="fb-logo" />
          </li>
          <li>
            <img src={twitter} alt="twitter-logo" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest-logo" />
          </li>
          <li>
            <img src={instagram} alt="instagram-logo" />
          </li>
        </ul>

        <Navbar />
        <p className="footer--copyright-text">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
