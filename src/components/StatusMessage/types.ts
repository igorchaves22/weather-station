import type { IRender } from "~types";

export interface IStatusMessage extends IRender {
    isAbsolute?: boolean;
    status?: "error" | "warning";
    text: string;
}
