import React from "react";
import "./Navbar.css";
import { IoClose, IoMenu } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div className="navbar-logo">
          <h1>Shalu Yadav.</h1>
        </div>

        <div id="navbar-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="close-icon-div">
          <IoClose id="closeIcon" />
        </div>
        <div className="menu-icon-div">
          <IoMenu id="menuIcon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
