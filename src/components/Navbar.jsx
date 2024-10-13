import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/navbar.css";

import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom";

function Navbar({ isDark, setDark, favorites }) {
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
          <NavLink className="nav-link" to="/contact">
            <li className="nav-item">Contact</li>
          </NavLink>
        </ul>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {isOpen ? (
            <CloseIcon className="menu-icon" fontSize="large" />
          ) : (
            <MenuIcon className="menu-icon" fontSize="large" />
          )}
        </button>
      </nav>
      <div className="favorites-toggle-container">
        <ToggleSwitch isDark={isDark} setDark={setDark} />
        <NavLink to="/favorites" className="favorites-image-wrapper">
          {favorites.length > 0 && (
            <span className="favorites-num">{favorites.length}</span>
          )}
          <FavoriteIcon fontSize="large" className={`fav-icon`} />
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
