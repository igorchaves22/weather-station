import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { useTimeout } from "~hooks";
import { BREAKPOINT } from "~utils";
import { INITIAL_SCROLL_POSITION, INITIAL_WIDTH_SIZE, ViewportContext } from "./constants";

const RESIZE_DEBOUNCE_DELAY = 200;
const SCROLL_DEBOUNCE_DELAY = 100;

export const ViewportContextProvider = ({ children }: PropsWithChildren) => {
    const [widthSize, setWidthSize] = useState(INITIAL_WIDTH_SIZE);
    const [scrollPosition, setScrollPosition] = useState(INITIAL_SCROLL_POSITION);
    const { runTimeout } = useTimeout();

    const updateWidthSize = useCallback(
        () => runTimeout(() => setWidthSize(window.innerWidth), RESIZE_DEBOUNCE_DELAY),
        [runTimeout]
    );
    const updateScrollPosition = useCallback(
        () => runTimeout(() => setScrollPosition(window.scrollY), SCROLL_DEBOUNCE_DELAY),
        [runTimeout]
    );
    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
    const thresholdTrigger = useCallback(
        (type: "width" | "scroll", threshold: number, isBelow?: boolean) => {
            const isWidth = type === "width";
            const value = isWidth ? widthSize : scrollPosition;

            if (isBelow) {
                return value < threshold;
            }

            return value >= threshold;
        },
        [scrollPosition, widthSize]
    );
    const breakpointStatus = useMemo(
        () => ({
            sm: thresholdTrigger("width", BREAKPOINT.sm),
            md: thresholdTrigger("width", BREAKPOINT.md),
            lg: thresholdTrigger("width", BREAKPOINT.lg),
            xl: thresholdTrigger("width", BREAKPOINT.xl),
            "2xl": thresholdTrigger("width", BREAKPOINT["2xl"])
        }),
        [thresholdTrigger]
    );

    useEffect(() => {
        updateWidthSize();
        updateScrollPosition();

        window.addEventListener("resize", updateWidthSize);
        window.addEventListener("scroll", updateScrollPosition);

        return () => {
            window.removeEventListener("resize", updateWidthSize);
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, [updateScrollPosition, updateWidthSize]);

    return (
        <ViewportContext.Provider
            value={{ widthSize, scrollPosition, scrollToTop, thresholdTrigger, breakpointStatus }}
        >
            {children}
        </ViewportContext.Provider>
    );
};
