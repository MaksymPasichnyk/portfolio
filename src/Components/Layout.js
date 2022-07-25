import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/Theme";

export default function Layout(props) {
  const { selectedTheme } = useContext(ThemeContext);

  const setContainerStyles = (theme) => {
    return {
      fontFamily: theme.font,
      backgroundColor: theme.colors.body,
      color: theme.colors.text,
    };
  };
  const [styles, setStyles] = useState(setContainerStyles(selectedTheme));

  useEffect(() => {
    setStyles(setContainerStyles(selectedTheme))
  }, [selectedTheme]);

  return (
    <div className="modal-wrap flex" style={styles}>
      {props.children}
    </div>
  );
}
