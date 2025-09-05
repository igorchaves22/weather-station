import { memo } from "react";
import { applyClassNameIfTrue, ICONS } from "~utils";
import type { IIcon } from "./types";
import "./styles.scss";

export const Icon = memo(function PhosphorIcon({ icon, weight, color, size }: IIcon) {
    const Element = ICONS[icon];

    return (
        <Element
            weight={weight}
            className={
                "icon" +
                applyClassNameIfTrue(color, `icon--color-${color}`) +
                applyClassNameIfTrue(size, `icon--size-${size}`)
            }
        />
    );
});
