import axios from "axios";

export const API_KEY = import.meta.env.VITE_API_KEY;

export const ENDPOINT = {
    weather: "weather",
    forecast: "forecast",
    air_pollution: "air_pollution"
};

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
});
