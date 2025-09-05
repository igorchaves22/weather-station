import { HomePage } from "~pages";
import { initializeTheme } from "~utils";
import "~styles/global.scss";

initializeTheme();

export function App() {
    return <HomePage />;
}
