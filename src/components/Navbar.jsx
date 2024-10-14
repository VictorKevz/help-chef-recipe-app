import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "../css/navbar.css";

import ToggleSwitch from "./ToggleSwitch";
import { NavLink, Link } from "react-router-dom";

function Navbar({ isDark, setDark, favorites }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(false);

  const toggleSettings = () => {
    
      setSettings(!settings)
      setMenuOpen(false)
    
  }
  const toggleMenu = () => {
    
    setSettings(false)
    setMenuOpen(!isMenuOpen)
  
}
  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <div className="logo-toggle-wrapper">
          <button className="toggle-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="menu-icon" fontSize="large" />
            ) : (
              <MenuIcon className="menu-icon" fontSize="large" />
            )}
          </button>
          <h1 className="logo">
            HELP<span className="dot"></span>CHEF<span className="dot"></span>
          </h1>
        </div>

        <ul className={`links-wrapper ${isMenuOpen && "open"}`}>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/recipes"
              activeClassName="active"
            >
              Recipes
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={`favorites-toggle-container ${settings && "open"}`}>
          <ToggleSwitch isDark={isDark} setDark={setDark} />
          <Link to="/favorites" className="favorites-image-wrapper">
            {favorites.length > 0 && (
              <span className="favorites-num">{favorites.length}</span>
            )}
            <FavoriteIcon fontSize="large" className={`fav-icon`} />
          </Link>
        </div>
        <button
          type="button"
          className={`settings-btn`}
          onClick={toggleSettings}
        >
          <SettingsSuggestIcon fontSize="large" className="settings-icon" />
          {settings ? (
            <KeyboardDoubleArrowUpIcon className="arrow-icon" />
          ) : (
            <KeyboardDoubleArrowDownIcon className="arrow-icon" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
