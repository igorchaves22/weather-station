import type { ICONS } from "~utils";

export type IconType = keyof typeof ICONS;

export interface IIconBase {
    icon: IconType;
}
