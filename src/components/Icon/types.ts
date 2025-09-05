import type { IconProps } from "@phosphor-icons/react";
import type { ColorType, IconSizeType, IIconBase } from "~types";

export interface IIcon extends IIconBase, Pick<IconProps, "weight"> {
    color?: ColorType;
    size?: IconSizeType;
}
