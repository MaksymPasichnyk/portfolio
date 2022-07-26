import { HiColorSwatch } from "react-icons/hi";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

export default function ThemeButton() {
	const { setIsThemeDialogOpen } = useContext(ThemeContext);

	return (
		<div onClick={() => { setIsThemeDialogOpen(true) }} className="theme-button">
			<HiColorSwatch />
		</div>
	)
}