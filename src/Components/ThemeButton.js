import { HiColorSwatch } from "react-icons/hi";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

export default function ThemeButton(props) {
	const { setIsThemeDialogOpen} = useContext(ThemeContext);

	console.log(props)

	return (
		<div onClick={props.openThemeModal} className="theme-button">
			<HiColorSwatch />
		</div>
	)
}