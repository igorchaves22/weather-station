import { Icon } from "../Icon";
import { ICON } from "./constants";
import { useController } from "./useController";
import "./styles.scss";

export const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useController();

    return (
        <button
            type="button"
            aria-label={`Toggle to ${theme} theme`}
            onClick={toggleTheme}
            className="toggle-theme-button"
        >
            <Icon
                icon={ICON[theme]}
                weight="bold"
                size="lg"
            />
        </button>
    );
};
