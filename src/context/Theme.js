import { createContext, useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import WebFont from "webfontloader";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const { theme, themeLoaded, getFonts, themes } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
	const [isThemeDialogOpen, setIsThemeDialogOpen] = useState(false);


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
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme, setIsThemeDialogOpen, isThemeDialogOpen }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
