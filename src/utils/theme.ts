import type { ThemeType } from "~types";
import { THEME_CONFIG } from "./constants";
import { getLocalStorageItem, setLocalStorageItem } from "./local-storage";

export const getThemeFromLocalStorage = () => getLocalStorageItem<ThemeType>(THEME_CONFIG.key);

export const saveThemeToLocalStorage = (theme: ThemeType) => setLocalStorageItem<ThemeType>(THEME_CONFIG.key, theme);

export const getTheme = () => getThemeFromLocalStorage() ?? THEME_CONFIG.defaultState;

export const updateTheme = (theme: ThemeType) => {
    saveThemeToLocalStorage(theme);
    document.body.classList.remove(...THEME_CONFIG.types);
    document.body.classList.add(theme);
};

export const initializeTheme = () => {
    const storedTheme = getTheme();

    updateTheme(storedTheme);
};
