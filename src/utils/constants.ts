import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";

export const THEME_CONFIG = {
    key: "theme",
    defaultState: "light",
    types: ["light", "dark"]
} as const;

export const BREAKPOINT = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
} as const;

export const SECTIONS = ["Overview", "Forecast", "Air Pollution"] as const;

export const QUERY_CONFIG = {
    key: "query",
    defaultState: {
        unit: "metric",
        city: undefined,
        coord: undefined
    },
    units: {
        standard: "K",
        metric: "°C",
        imperial: "°F"
    }
} as const;

export const ICONS = {
    X: XIcon,
    List: ListIcon,
    Sun: SunIcon,
    Moon: MoonIcon
};
