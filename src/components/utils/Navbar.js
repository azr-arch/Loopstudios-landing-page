/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = ({ ariaExpanded }) => {
  return (
    <>
      <nav className="nav-bar" aria-expanded={ariaExpanded}>
        <ul className="nav-bar--menu">
          <li className="menu--item">
            <a href="#">About</a>
          </li>
          <li className="menu--item">
            <a href="#">Carrers</a>
          </li>
          <li className="menu--item">
            <a href="#">Events</a>
          </li>
          <li className="menu--item">
            <a href="#">Products</a>
          </li>
          <li className="menu--item">
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
