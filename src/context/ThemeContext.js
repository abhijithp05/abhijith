// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the themes with their respective CSS custom properties
const themes = {
  light: {
    '--bg-color': '#ffffff',
    '--text-color': '#000000',
    '--primary-color': '#1D4ED8',
    '--secondary-color': '#9333EA',
  },
  dark: {
    '--bg-color': '#121212',
    '--text-color': '#E5E5E5',
    '--primary-color': '#3B82F6',
    '--secondary-color': '#9333EA',
  },
  blue: {
    '--bg-color': '#E0F7FA',
    '--text-color': '#004D40',
    '--primary-color': '#009688',
    '--secondary-color': '#80CBC4',
  },
};

// Create the context with default values
const ThemeContext = createContext({
  theme: 'light', // default theme
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light'); // Default theme
    }
  }, []);

  // Update the theme and set CSS variables
  useEffect(() => {
    const themeVars = themes[theme];
    for (const [key, value] of Object.entries(themeVars)) {
      document.documentElement.style.setProperty(key, value);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
