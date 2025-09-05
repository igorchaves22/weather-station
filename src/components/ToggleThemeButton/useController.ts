import { useCallback, useState } from "react";
import type { ThemeType } from "~types";
import { getTheme, updateTheme } from "~utils";

const OPPOSITE_THEME = {
    light: "dark",
    dark: "light"
} as const;

export const useController = () => {
    const [theme, setTheme] = useState<ThemeType>(getTheme());

    const toggleTheme = useCallback(
        () =>
            setTheme((previousState) => {
                const newTheme = OPPOSITE_THEME[previousState];

                updateTheme(newTheme);

                return newTheme;
            }),
        []
    );

    return { theme, toggleTheme };
};
