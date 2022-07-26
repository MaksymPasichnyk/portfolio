import { useState, useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function CreateTheme() {
  const { isThemeDialogOpen, setIsThemeDialogOpen } = useContext(ThemeContext);
	const [formValues, setformValues] = useState({
		themeName: '',
		backgroundColor: '#000000',
		textColor: '#ffffff',
		btnBackgroundColor: '#000000',
		btnTextColor: '#000000',
		linkColor: '#000000',
		fonts: 'Syne',
	})

	function handleFormValues(event) {
		const {name, value} = event.target;
		setformValues(prevFormValues => {
			return {
				...prevFormValues,
				[name]: value
			}
		})
	}

	console.log(formValues)

	const outputStyles = {
		backgroundColor: formValues.backgroundColor,
		color: formValues.textColor
	}

  return (
    <dialog
      open={isThemeDialogOpen ? "open" : ""}
      className="create-theme-modal"
    >
      <div className="create-theme-modal__container">
        <div className="create-theme-modal__header">
          <h3 className="title">Create a Theme</h3>
          <div onClick={() => {setIsThemeDialogOpen(false)}} className="close">x</div>
        </div>
        <div className="create-theme-modal__main">
          <div className="create-theme-modal__left">
            <form className="theme-form">
              <div className="theme-form__group">
                <label>Theme Name</label>
                <input 
									name="themeName" 
									type="text" 
									value={formValues.themeName}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Background Color:</label>
                <input 
									name="backgroundColor" 
									type="color" 
									value={formValues.backgroundColor}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Text Color:</label>
                <input 
									name="textColor" 
									type="color" 
									value={formValues.textColor}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Button Background Color:</label>
                <input 
									name="btnBackgroundColor" 
									type="color" 
									value={formValues.btnBackgroundColor}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Button Text Color:</label>
                <input 
									name="btnTextColor" 
									type="color" 
									value={formValues.btnTextColor}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Link Color:</label>
                <input 
									name="linkColor" 
									type="color" 
									value={formValues.linkColor}
									onChange={handleFormValues}
								/>
              </div>
              <div className="theme-form__group">
                <label>Select a Font:</label>
                <select 
									name="fonts"
									value={formValues.fonts}
									onChange={handleFormValues}
								>
                  <option value="Syne">Syne</option>
									<option value="Playfair Display">Playfair Display</option>
									<option value="Playfair Display">Mochiy Pop One</option>
                </select>
              </div>
            </form>
          </div>
          <div className="create-theme-modal__right">
            <div className="theme-preview">
              <h5 className="theme-preview__title">Preview</h5>
              <div style={outputStyles} className="theme-preview__display">
                <p className="theme-preview__text">
                  This is for preview only. Pick the color and font from the
                  left side to see it working.
                </p>
                <button className="theme-preview__button">I am a Button</button>
                <a className="theme-preview__link" href="#">
                  I am Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
