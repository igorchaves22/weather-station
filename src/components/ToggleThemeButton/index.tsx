import { useController } from "./useController";

export const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useController();

    return (
        <button
            type="button"
            aria-label={`Toggle to ${theme} theme`}
            onClick={toggleTheme}
        >
            {`ToggleThemeButton: ${theme}`}
        </button>
    );
};
