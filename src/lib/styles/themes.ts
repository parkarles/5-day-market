import React from "react";

export const themes = {
  color: {
    foreground: "#000000",
    background: "#FDF7F0",
  },
  breakPoint: {
    xs: 600,
    sm: 960,
    md: 1440,
    lg: 1920,
  }
};

export const ThemeContext = React.createContext(themes);
