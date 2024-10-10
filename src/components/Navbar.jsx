import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../css/navbar.css";

import ToggleSwitch from "./ToggleSwitch";
import chefImage from "../assets/images/chef.webp";
import { NavLink } from "react-router-dom";

function Navbar({ isDark, setDark }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <h1 className="logo">
          HELP<span className="dot"></span>CHEF<span className="dot"></span>
        </h1>
        <ul className="links-wrapper">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <NavLink className="nav-link" to="/recipes">
            <li className="nav-item">Recipes</li>
          </NavLink>

          <li className="nav-item">Contact</li>
        </ul>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {isOpen ? (
            <CloseIcon className="menu-icon" fontSize="large" />
          ) : (
            <MenuIcon className="menu-icon" fontSize="large" />
          )}
        </button>
      </nav>
      <div className="profile-toggle-container">
        <ToggleSwitch isDark={isDark} setDark={setDark} />

        <img
          src={chefImage}
          className="profile-img"
          alt="An profile picture of a male chef"
        />
      </div>
    </header>
  );
}

export default Navbar;
