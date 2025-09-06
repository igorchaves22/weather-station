export const DEFAULT_AQI_VALUE = 1;

export const DEFAULT_CHART_SECTOR_VALUE = 1;

export const FIRST_INDEX = 0;

export const EMPTY_OBJECT = {};

export const AQI_SCALE = {
    1: { level: 1, name: "Good", color: "#00e400" },
    2: { level: 2, name: "Moderate", color: "#ffff00" },
    3: { level: 3, name: "Sensitive", color: "#ff7e00" },
    4: { level: 4, name: "Unhealthy", color: "#ff0000" },
    5: { level: 5, name: "VeryUnhealthy", color: "#8f3f97" }
};

export const COMPONENTS = {
    co: { name: "Carbon Monoxide (CO)", color: "#FF4D4D" },
    no: { name: "Nitric Oxide (NO)", color: "#FFA500" },
    no2: { name: "Nitrogen Dioxide (NO₂)", color: "#FFBD33" },
    o3: { name: "Ozone (O₃)", color: "#33FF57" },
    so2: { name: "Sulfur Dioxide (SO₂)", color: "#8E33FF" },
    pm2_5: { name: "Fine Particles (PM2.5)", color: "#FF33A8" },
    pm10: { name: "Coarse Particles (PM10)", color: "#33FFF6" },
    nh3: { name: "Ammonia (NH₃)", color: "#FF8633" }
};
