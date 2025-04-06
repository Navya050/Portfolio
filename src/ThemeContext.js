import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleChangeTheme() {
    setIsDarkMode(!isDarkMode);
  }

  const theme = isDarkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSetTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useSetTheme has to be used inside the theme context");
  }

  return theme;
};
