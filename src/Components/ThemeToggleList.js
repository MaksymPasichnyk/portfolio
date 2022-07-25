import { useContext } from "react";
import { useTheme } from "../hooks/useTheme"
import { getFromLocalStorage } from "../utils/storage";
import { ThemeContext } from "../context/Theme";

export default function ThemeToggleList(props) {
	const { setThemeMode } = useTheme();
	const themes = getFromLocalStorage('all-themes');

	console.log()
	console.log(themes.data)

	function handleSelectChange(e) {
		const { value } = e.target;

		setThemeMode(themes.data[value])
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