import type { PropsWithChildren } from "react";
import type { IRender } from "~types";

export interface IOverlayModal extends PropsWithChildren, IRender {
    delay?: number;
}
