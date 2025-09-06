import type { IAirPollution, IForecast, IQuery, IWeather } from "~types";
import { api, API_KEY, ENDPOINT } from "./api";

export const getCurrentWeather = async ({ unit, city, coord }: IQuery) => {
    const params: Record<string, string | number> = {
        appid: API_KEY,
        units: unit
    };

    if (coord) {
        params.lat = coord.lat;
        params.lon = coord.lon;
    } else if (city) {
        params.q = city;
    }

    return await api.get<IWeather>(ENDPOINT.weather, { params }).then((response) => response.data);
};

export const getForecast = async ({ unit, city, coord }: IQuery) => {
    const params: Record<string, string | number> = {
        appid: API_KEY,
        units: unit
    };

    if (coord) {
        params.lat = coord.lat;
        params.lon = coord.lon;
    } else if (city) {
        params.q = city;
    }

    return await api.get<IForecast>(ENDPOINT.forecast, { params }).then((response) => response.data);
};

export const getAirPollution = async ({ unit, lon, lat }: Pick<IQuery, "unit"> & Required<IQuery["coord"]>) =>
    await api
        .get<IAirPollution>(ENDPOINT.air_pollution, {
            params: {
                appid: API_KEY,
                unit,
                lon,
                lat
            }
        })
        .then((response) => response.data);
