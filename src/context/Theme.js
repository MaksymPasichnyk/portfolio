import { createContext, useState, useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import WebFont from "webfontloader";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
