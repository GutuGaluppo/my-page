import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { useThemeMode } from "../../contexts/ThemeContext";
import { StyledToggleButton } from "./styled";

const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <StyledToggleButton
      onClick={toggleMode}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </StyledToggleButton>
  );
};

export default ThemeToggle;
