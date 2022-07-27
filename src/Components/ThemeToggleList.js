import { useContext, useState,useEffect } from "react";
import { useTheme } from "../hooks/useTheme"
import { getFromLocalStorage } from "../utils/storage";
import { ThemeContext } from "../context/Theme";
import { setToLocalStorage } from "../utils/storage";

export default function ThemeToggleList(props) {
	const themes = getFromLocalStorage('all-themes');
	const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);
	const [value, setValue] = useState(selectedTheme.name.toLowerCase());

	function handleSelectChange(e) {
		const { value } = e.target;
		const mode = themes.data[value];

		setValue(value)
		setSelectedTheme(mode)
		setToLocalStorage('theme', mode)
	}

	const themeElements = Object.entries(themes.data).map(item => {
		const themeName = item[0];
		const themeData = item[1];

		return (
			<option key={themeData.id} value={themeName}>{themeName}</option>
		)
	})

	return (
		<div className="themeToggleList">
			<select value={value} onChange={handleSelectChange}>
				{themeElements}
			</select>
		</div>
	)
}