import { useState, useContext, useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeContext } from "../context/Theme";
import { nanoid } from "nanoid";
import { setToLocalStorage, getFromLocalStorage } from "../utils/storage";
import ThemeButton from "./ThemeButton";

export default function CreateTheme() {
  const { getfont } = useTheme();
  const { isThemeDialogOpen, setIsThemeDialogOpen } = useContext(ThemeContext);
  const [newTheme, setNewTheme] = useState({});
  const { themes } = useTheme();
  const [customThemes, setCustomThemes] = useState(themes);
  const { setSelectedTheme, selectedTheme } = useContext(ThemeContext);
  const currentTheme = {
    themeName: "Custom Theme",
    backgroundColor: selectedTheme.colors.body,
    textColor: selectedTheme.colors.text,
    borderColor: selectedTheme.colors.borderColor,
    linkColor: selectedTheme.colors.linkColor,
    font: selectedTheme.font,
  };
  const [formTheme, setFormTheme] = useState(currentTheme);
  const ref = useRef(null);
  console.log(selectedTheme);

  function handleformTheme(event) {
    const { name, value } = event.target;
    setFormTheme((prevformTheme) => {
      return {
        ...prevformTheme,
        [name]: value,
      };
    });
  }

  const dialogMainStyles = {
    backgroundColor: selectedTheme.colors.body,
    color: selectedTheme.colors.text,
  };

  const dialogHeaderStyles = {
    backgroundColor: selectedTheme.colors.text,
    color: selectedTheme.colors.body,
  };

  function handleClick(themeName) {
    const allThemes = getFromLocalStorage("all-themes");
    const mode = allThemes.data[themeName];
    setSelectedTheme(mode);

    setSelectedTheme(mode);
    setToLocalStorage("theme", mode);
    console.log(mode);

    setFormTheme({
      themeName: mode.name,
      backgroundColor: mode.colors.body,
      textColor: mode.colors.text,
      borderColor: mode.colors.borderColor,
      font: mode.font,
      linkColor: mode.colors.linkColor,
    });
  }

  const getThemeObj = () => {
    const themeObj = {};

    themeObj[formTheme.themeName] = {
      id: nanoid(),
      name: formTheme.themeName,
      colors: {
        body: formTheme.backgroundColor,
        text: formTheme.textColor,
        borderColor: formTheme.borderColor,
        linkColor: formTheme.linkColor,
      },
      font: formTheme.font,
    };

    return themeObj;
  };

  useEffect(() => {
    const updated = getThemeObj();
    setNewTheme({ ...updated });
  }, [formTheme]);

  useEffect(() => {
    const themeModal = ref.current;

    console.log(themeModal);
    //themeModal.showModal();
  }, []);

  const previewBlockStyles = {
    backgroundColor: formTheme.backgroundColor,
    color: formTheme.textColor,
    fontFamily: formTheme.font,
    borderColor: formTheme.borderColor,
  };

  const linkStyles = {
    color: formTheme.linkColor,
    backgroundColor: formTheme.textColor,
  };

  function handleSubmit(event) {
    event.preventDefault();
    const allThemes = themes;
    const updated = getThemeObj();
    allThemes.data[formTheme.themeName] = updated[formTheme.themeName];

    setCustomThemes(allThemes);
    setToLocalStorage("all-themes", allThemes);
    //console.log(getThemeObj());
  }

  const themeElements = Object.entries(customThemes.data).map((item) => {
    const themeName = item[0];
    const themeData = item[1];

    const previewStyles = {
      backgroundColor: themeData.colors.body,
      color: themeData.colors.text,
      borderColor: themeData.colors.borderColor,
      fontFamily: themeData.font,
    };

    return (
      <div
        onClick={() => handleClick(themeName)}
        style={previewStyles}
        key={themeData.id}
        className="theme"
      >
        <h4 className="theme__name">{themeData.name}</h4>
        <p className="theme__text">
          Lorem Ipsum is simply dummy text of the printin
        </p>
      </div>
    );
  });

  function openThemeModal() {
    ref.current.showModal();
  }

  function closeThemeModal() {
    ref.current.close();
  }

  return (
    <>
      <ThemeButton openThemeModal={openThemeModal} />
      <dialog 
				ref={ref} 
				className="create-theme-modal"
				style={{
					borderColor: selectedTheme.colors.text
				}}
			>
        <div className="create-theme-modal__container">
          <div
            className="create-theme-modal__header"
            style={dialogHeaderStyles}
          >
            <h3 className="title">Create a Theme</h3>
            <div onClick={closeThemeModal} className="close">
              x
            </div>
          </div>
          <div className="create-theme-modal__main" style={dialogMainStyles}>
            <div className="create-theme-modal__left">
              <form onSubmit={handleSubmit} className="theme-form">
                <div className="theme-form__group">
                  <label>Theme Name</label>
                  <input
                    name="themeName"
                    type="text"
                    value={formTheme.themeName}
                    onChange={handleformTheme}
                    className="theme-form__field"
                    style={dialogMainStyles}
                  />
                </div>
                <div className="theme-form__group">
                  <label>Primary Color:</label>
                  <input
                    name="backgroundColor"
                    type="color"
                    value={formTheme.backgroundColor}
                    onChange={handleformTheme}
                    style={dialogMainStyles}
                    className="theme-form__color-field"
                  />
                </div>
                <div className="theme-form__group">
                  <label>Secondary Color:</label>
                  <input
                    name="textColor"
                    type="color"
                    value={formTheme.textColor}
                    onChange={handleformTheme}
                    style={dialogMainStyles}
                    className="theme-form__color-field"
                  />
                </div>
                <div className="theme-form__group">
                  <label>Link Color:</label>
                  <input
                    name="linkColor"
                    type="color"
                    value={formTheme.linkColor}
                    onChange={handleformTheme}
                    style={dialogMainStyles}
                    className="theme-form__color-field"
                  />
                </div>
                <div className="theme-form__group">
                  <label>Border Color:</label>
                  <input
                    name="borderColor"
                    type="color"
                    value={formTheme.borderColor}
                    onChange={handleformTheme}
                    style={dialogMainStyles}
                    className="theme-form__color-field"
                  />
                </div>
                <div className="theme-form__group">
                  <label>Select a Font:</label>
                  <select
                    name="font"
                    value={formTheme.font}
                    onChange={handleformTheme}
                    className="theme-form__field"
                    style={dialogMainStyles}
                  >
                    <option value="Syne">Syne</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Mochiy Pop One">Mochiy Pop One</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="theme-form__button"
                  style={dialogMainStyles}
                >
                  Create theme
                </button>
              </form>
            </div>
            <div className="create-theme-modal__right">
              <div className="theme-preview">
                <h5 className="theme-preview__title">Preview</h5>
                <div
                  style={previewBlockStyles}
                  className="theme-preview__display"
                >
                  <p className="theme-preview__text">
                    This is for preview only. Pick the color and font from the
                    left side to see it working.
                  </p>

                  <a
                    className="theme-preview__link"
                    style={linkStyles}
                    href="#"
                  >
                    Link example
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-theme-list">{themeElements}</div>
        </div>
      </dialog>
    </>
  );
}
