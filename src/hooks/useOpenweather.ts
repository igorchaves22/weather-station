import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { ENDPOINT, getAirPollution, getCurrentWeather, getForecast } from "~services";
import type { IAirPollution, IForecast, IQuery, IWeather } from "~types";

export const useCurrentWeather = (query: IQuery) =>
    useQuery<IWeather, AxiosError>({
        queryKey: [ENDPOINT.weather, query],
        queryFn: () => getCurrentWeather(query),
        enabled: Boolean(query.city || query.coord),
        retry: false,
        refetchOnWindowFocus: false
    });

export const useForecast = (query: IQuery) =>
    useQuery<IForecast, AxiosError>({
        queryKey: [ENDPOINT.forecast, query],
        queryFn: () => getForecast(query),
        enabled: Boolean(query.city || query.coord),
        retry: false,
        refetchOnWindowFocus: false
    });

export const useAirPollution = (query: Pick<IQuery, "unit" | "coord">) =>
    useQuery<IAirPollution, AxiosError>({
        queryKey: [ENDPOINT.air_pollution, query],
        queryFn: () => getAirPollution({ unit: query.unit, lat: query.coord!.lat, lon: query.coord!.lon }),
        enabled: Boolean(query?.coord?.lat && query?.coord?.lon),
        retry: false,
        refetchOnWindowFocus: false
    });
