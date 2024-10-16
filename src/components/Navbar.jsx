import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import chef from "../assets/images/chef.webp";
import "../css/navbar.css";

import ToggleSwitch from "./ToggleSwitch";
import { NavLink, Link } from "react-router-dom";
import { navVariants } from "../variants";

function Navbar({ isDark, setDark, favorites }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(false);

  const toggleSettings = () => {
    setSettings(!settings);
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setSettings(false);
    setMenuOpen(!isMenuOpen);
  };
  
  // Focus management for accessibility
  const closeMenuOnEsc = (e) => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  const links = [
    { id: 0, path: "/", text: "Home" },
    { id: 1, path: "/recipes", text: "Recipes" },
    { id: 2, path: "/contact", text: "Contact" },
  ];
  const isActive = favorites.length > 0 ? true : false;

  return (
    <motion.header
      className="nav-wrapper"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="nav-container">
        <div className="logo-toggle-wrapper">
          {/* Accessible button for toggling menu */}
          <button 
            className="toggle-btn" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
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
        {/* Accessible Menu */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={isMenuOpen}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`links-wrapper ${isMenuOpen && "open"} ${
              !isDark && "border-light"
            }`}
            aria-hidden={!isMenuOpen}
            onKeyDown={closeMenuOnEsc}
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                <NavLink
                  className="nav-link"
                  to={link.path}
                  activeClassName={`active`}
                  tabIndex={0}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
        {/* Toggle and Favorites Section */}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          key={settings}
          className={`favorites-toggle-container ${!isDark && "border-light"} ${
            settings && "open"
          }`}
          tabIndex={0}
          onKeyDown={closeMenuOnEsc}
        >
          <ToggleSwitch isDark={isDark} setDark={setDark} />
          <Link
            to="/profile"
            onClick={() => setSettings(false)}
            className={`favorites-image-wrapper ${isActive && "filled"}`}
            aria-label="Favorites profile"
          >
            {isActive && (
              <span className="favorites-num">{favorites.length}</span>
            )}
            <img
              src={chef}
              alt="Cartoon chef avatar"
              className={`chef-img`}
            />
          </Link>
        </motion.div>
        {/* Accessible settings button */}
        <button
          type="button"
          className={`settings-btn ${!isDark && "border-light"}`}
          onClick={toggleSettings}
          aria-expanded={settings}
          aria-label={settings ? "Close settings" : "Open settings"}
        >
          <SettingsSuggestIcon fontSize="large" className="settings-icon" />
          {settings ? (
            <KeyboardDoubleArrowUpIcon className="arrow-icon" />
          ) : (
            <KeyboardDoubleArrowDownIcon className="arrow-icon" />
          )}
        </button>
      </nav>
    </motion.header>
  );
}

export default Navbar;