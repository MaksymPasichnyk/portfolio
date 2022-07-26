import { useContext } from "react";
import { useTheme } from "../hooks/useTheme"
import { getFromLocalStorage } from "../utils/storage";
import { ThemeContext } from "../context/Theme";
import { setToLocalStorage } from "../utils/storage";

export default function ThemeToggleList(props) {
	const { setThemeMode } = useTheme();
	const themes = getFromLocalStorage('all-themes');
	const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);


	function handleSelectChange(e) {
		const { value } = e.target;
		const mode = themes.data[value];

		setSelectedTheme(mode)
		setToLocalStorage('theme', mode)
	}

	return (
		<div className="themeToggleList">
			<select onChange={handleSelectChange}>
				<option defaultChecked value="light">light</option>
				<option value="dark">dark</option>
			</select>
		</div>
	)
}