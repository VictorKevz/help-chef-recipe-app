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
        <AnimatePresence mode="wait">
          <motion.ul
          key={isMenuOpen}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`links-wrapper ${isMenuOpen && "open"} ${
              !isDark && "border-light"
            }`}
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
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          key={settings}
          className={`favorites-toggle-container ${!isDark && "border-light"} ${
            settings && "open"
          }`}
        >
          <ToggleSwitch isDark={isDark} setDark={setDark} />
          <Link
            to="/profile"
            onClick={() => setSettings(false)}
            className={`favorites-image-wrapper ${isActive && "filled"}`}
          >
            {isActive && (
              <span className="favorites-num">{favorites.length}</span>
            )}
            <img
              src={chef}
              alt="Image of chef cartoon"
              className={`chef-img`}
            />
          </Link>
        </motion.div>
        <button
          type="button"
          className={`settings-btn ${!isDark && "border-light"}`}
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
    </motion.header>
  );
}

export default Navbar;
