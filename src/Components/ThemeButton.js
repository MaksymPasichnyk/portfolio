import { HiColorSwatch } from "react-icons/hi";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

export default function ThemeButton(props) {
	const { selectedTheme} = useContext(ThemeContext);

	return (
		<div 
			onClick={props.openThemeModal} 
			className="theme-button"
			style={{
				color: selectedTheme.colors.linkColor,
			}}
		>
			<HiColorSwatch />
		</div>
	)
}