import { createContext, useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import WebFont from "webfontloader";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const { theme, themeLoaded, getFonts, themes } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

	console.log(themeLoaded)

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
    <ThemeContext.Provider value={{selectedTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
