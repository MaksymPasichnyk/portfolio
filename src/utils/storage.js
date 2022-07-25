const storage = window.localStorage;

export const setToLocalStorage = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = key => {
	const value = window.localStorage.getItem(key);

	if (value) {
		return JSON.parse(value)
	}
}
