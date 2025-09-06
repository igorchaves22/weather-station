import type { PropsWithChildren } from "react";
import type { IIconBase } from "~types";

export interface IWeatherCard extends PropsWithChildren {
    heading?: {
        title: string;
        description?: string;
    } & IIconBase;
    animationOrder?: number;
}
