import { useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";
import _ from 'lodash';
export const useTheme = () => {
	const themes = getFromLocalStorage('all-themes');
	const [theme, setTheme] = useState(themes.data.light);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setThemeMode = mode => {

		setToLocalStorage('theme', mode)
		setTheme(mode)
	}

	const getFonts = () => {
		const allFonts = _.values(_.mapValues(themes.data, 'font'));
		return allFonts;
	}

	useEffect(() => {
		const localTheme = getFromLocalStorage('theme');

		localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
		setThemeLoaded(true);
	}, [])


	return { theme, themeLoaded, setThemeMode, getFonts }
};