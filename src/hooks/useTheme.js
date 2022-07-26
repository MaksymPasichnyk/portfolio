import { useEffect, useState, } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";
import _ from 'lodash';
export const useTheme = () => {
	const themes = getFromLocalStorage('all-themes');
	const defaultTheme = !!getFromLocalStorage('theme') ? getFromLocalStorage('theme') : themes.data.light;
	const [theme, setTheme] = useState(defaultTheme);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setThemeMode = mode => {

		setToLocalStorage('theme', mode)
		setTheme(mode)
	}

	const getFonts = () => {
		const allFonts = _.values(_.mapValues(themes.data, 'font'));
		return allFonts;
	}


	return { theme, themeLoaded, setThemeMode, getFonts, setTheme }
};