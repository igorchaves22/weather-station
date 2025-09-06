import { QueryClient } from "@tanstack/react-query";
import { AirPollutionSection } from "../AirPollutionSection";
import { ForecastSection } from "../ForecastSection";
import { OverviewSection } from "../OverviewSection";

export const COORD_SECTIONS = ["Air Pollution"] as const;

export const queryClient = new QueryClient();

export const SECTION = {
    Overview: <OverviewSection />,
    Forecast: <ForecastSection />,
    "Air Pollution": <AirPollutionSection />
};
