import { useState, useContext, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeContext } from "../context/Theme";
import { nanoid } from "nanoid";
import { setToLocalStorage, getFromLocalStorage } from "../utils/storage";

export default function CreateTheme() {
  const defaultTheme = {
    themeName: "Custom Theme",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    borderColor: "#ffffff",
    font: "Syne",
  };

  const { getfont } = useTheme();
  const { isThemeDialogOpen, setIsThemeDialogOpen } = useContext(ThemeContext);
  const [formTheme, setFormTheme] = useState(defaultTheme);
  const [newTheme, setNewTheme] = useState({});
  const { themes } = useTheme();
	const [customThemes, setCustomThemes] = useState(themes);
	const { setSelectedTheme } = useContext(ThemeContext);

  function handleformTheme(event) {
    const { name, value } = event.target;
    setFormTheme((prevformTheme) => {
      return {
        ...prevformTheme,
        [name]: value,
      };
    });
  }

	function handleClick(themeName) {
		const allThemes = getFromLocalStorage('all-themes');
		const mode = allThemes.data[themeName];
		setSelectedTheme(mode);
		console.log(mode)
		//setFormTheme((prevFormTheme => {
		//	return {
		//		...prevFormTheme,
		//		backgroundColor: mode.colors.body,
		//		textColor: mode.colors.textColor
		//	}
		//}))
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
      },
      font: formTheme.font,
    };

    return themeObj;
  };

  useEffect(() => {
    const updated = getThemeObj();
    setNewTheme({ ...updated });
  }, [formTheme]);

  const previewBlockStyles = {
    backgroundColor: formTheme.backgroundColor,
    color: formTheme.textColor,
		fontFamily: formTheme.font,
		borderColor: formTheme.borderColor,
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
		}

    return (
      <div onClick={() => handleClick(themeName)} style={previewStyles} key={themeData.id} className="theme">
        <h4 className="theme__name">{themeName}</h4>
        <p className="theme__text">Lorem Ipsum is simply dummy text of the printin</p>
      </div>
    );
  });

  return (
    <dialog
      open={isThemeDialogOpen ? "open" : ""}
      className="create-theme-modal"
    >
      <div className="create-theme-modal__container">
        <div className="create-theme-modal__header">
          <h3 className="title">Create a Theme</h3>
          <div
            onClick={() => {
              setIsThemeDialogOpen(false);
            }}
            className="close"
          >
            x
          </div>
        </div>
        <div className="create-theme-modal__main">
          <div className="create-theme-modal__left">
            <form onSubmit={handleSubmit} className="theme-form">
              <div className="theme-form__group">
                <label>Theme Name</label>
                <input
                  name="themeName"
                  type="text"
                  value={formTheme.themeName}
                  onChange={handleformTheme}
                />
              </div>
              <div className="theme-form__group">
                <label>Background Color:</label>
                <input
                  name="backgroundColor"
                  type="color"
                  value={formTheme.backgroundColor}
                  onChange={handleformTheme}
                />
              </div>
              <div className="theme-form__group">
                <label>Text Color:</label>
                <input
                  name="textColor"
                  type="color"
                  value={formTheme.textColor}
                  onChange={handleformTheme}
                />
              </div>
              <div className="theme-form__group">
                <label>Border Color:</label>
                <input
                  name="borderColor"
                  type="color"
                  value={formTheme.borderColor}
                  onChange={handleformTheme}
                />
              </div>
              <div className="theme-form__group">
                <label>Select a Font:</label>
                <select
                  name="font"
                  value={formTheme.font}
                  onChange={handleformTheme}
                >
                  <option value="Syne">Syne</option>
                  <option value="Playfair Display">Playfair Display</option>
                  <option value="Mochiy Pop One">Mochiy Pop One</option>
                </select>
              </div>
              <button type="submit">Create theme</button>
            </form>
          </div>
          <div className="create-theme-modal__right">
            <div className="theme-preview">
              <h5 className="theme-preview__title">Preview</h5>
              <div style={previewBlockStyles} className="theme-preview__display">
                <p className="theme-preview__text">
                  This is for preview only. Pick the color and font from the
                  left side to see it working.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-theme-list">
						{themeElements}
        </div>
      </div>
    </dialog>
  );
}
