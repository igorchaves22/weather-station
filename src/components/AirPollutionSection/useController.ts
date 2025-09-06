import { useContext, useMemo } from "react";
import { QueryContext } from "~contexts";
import { useAirPollution } from "~hooks";
import {
    AQI_SCALE,
    COMPONENTS,
    DEFAULT_AQI_VALUE,
    DEFAULT_CHART_SECTOR_VALUE,
    EMPTY_OBJECT,
    FIRST_INDEX
} from "./constants";
import type { AqiScaleKeyType, ComponentKeyType } from "./types";

export const useController = () => {
    const { query } = useContext(QueryContext);
    const { isLoading, isError, error, data } = useAirPollution(query);

    const content = useMemo(() => {
        const aqiValue = data?.list[FIRST_INDEX].main.aqi ?? DEFAULT_AQI_VALUE;

        return {
            aqi: {
                value: aqiValue,
                chartData: Object.entries(AQI_SCALE).map(([, scale]) => ({
                    name: scale.name,
                    value: DEFAULT_CHART_SECTOR_VALUE,
                    color: scale.color
                })),
                level: {
                    color: AQI_SCALE[aqiValue as AqiScaleKeyType].color,
                    text: `${aqiValue} - ${AQI_SCALE[aqiValue as AqiScaleKeyType].name}`
                }
            },
            components: Object.entries(data?.list[FIRST_INDEX].components ?? EMPTY_OBJECT).map(([key, value]) => ({
                key,
                name: COMPONENTS[key as ComponentKeyType].name,
                value: value as number,
                color: COMPONENTS[key as ComponentKeyType].color
            }))
        };
    }, [data?.list]);

    return { isLoading, isError, error, content };
};
