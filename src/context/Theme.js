import { createContext, useState, useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import WebFont from "webfontloader";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const ref = useRef(null);
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

  function showThemeModal(modal) {
    modal.showModal();
  }

  function closeThemeModal(modal) {
    modal.close();
  }

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        setIsThemeDialogOpen,
        isThemeDialogOpen,
        showThemeModal,
        closeThemeModal,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
