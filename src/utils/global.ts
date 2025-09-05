import { getQuery, saveQueryToLocalStorage } from "./query";
import { getTheme, updateTheme } from "./theme";

export const initializeApp = () => {
    const storedTheme = getTheme();
    const storedQuery = getQuery();

    updateTheme(storedTheme);
    saveQueryToLocalStorage(storedQuery);
};
