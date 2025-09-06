export const LOADING_DURATION = 650;

export const TYPE_OPTIONS = [
    {
        value: "city",
        label: "City"
    },
    {
        value: "coord",
        label: "Coordinates"
    }
] as const;

export const UNIT_OPTIONS = [
    {
        value: "standard",
        label: "Standard (Kelvin - m/s)"
    },
    {
        value: "metric",
        label: "Metric (°C - m/s)"
    },
    {
        value: "imperial",
        label: "Imperial (°F - mph)"
    }
] as const;

export const COORD_INPUTS = [
    {
        name: "lat",
        label: "Lat"
    },
    {
        name: "lon",
        label: "Lon"
    }
] as const;
