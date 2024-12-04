import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <div className="nav">
        <NavLink to="/"><h1 className="logo-space">
          <span className="logo">के</span>Shav
        </h1></NavLink>
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar Links */}
      <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <NavLink to="/" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/project">
            <li>Project</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
        <NavLink to="/contact"><button className="btn-1">Hire Me</button></NavLink>
    </div>
  );
};

export default Nav;
