import type { QUERY_CONFIG } from "~utils";

export interface IQuery {
    unit: keyof typeof QUERY_CONFIG.units;
    city?: string;
    coord?: {
        lat: number;
        lon: number;
    };
}
