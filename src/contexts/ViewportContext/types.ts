import type { BREAKPOINT } from "~utils";

type BreakpointKeyType = keyof typeof BREAKPOINT;

export interface IViewportContext {
    widthSize: number;
    scrollPosition: number;
    scrollToTop: () => void;
    thresholdTrigger: (type: "width" | "scroll", threshold: number, isBelow?: boolean) => boolean;
    breakpointStatus: {
        [K in BreakpointKeyType]: boolean;
    };
}
