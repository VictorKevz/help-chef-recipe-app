import React from "react";
import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../css/toggleSwitch.css";


function ToggleSwitch({ isDark, setDark }) {
  const handleChange = (event) => {
    const { checked } = event.target;
    setDark(checked);
  };
  return (
    <div className="toggle-container">
      <LightModeIcon
        fontSize="large"
        className={`toggle-icon ${!isDark && "header-icons-light"}`}
      />
      <Switch
        checked={isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        className="switch"
      />
      <DarkModeIcon
        fontSize="large"
        className={`toggle-icon ${!isDark && "header-icons-light"}`}
      />
    </div>
  );
}

export default ToggleSwitch;
