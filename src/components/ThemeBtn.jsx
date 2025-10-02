import React from "react";
import Switch from "@mui/material/Switch";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeBtn = () => {
  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center">
      <BedtimeIcon sx={{ color: "#4b5563" }} />
      <Switch onChange={handleToggle} defaultChecked />
      <LightModeIcon sx={{ color: "#fbbf24" }} />
    </div>
  );
};

export default ThemeBtn;
