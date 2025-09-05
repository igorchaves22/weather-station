import { useCallback, useEffect, useRef } from "react";

type TimeoutRefType = ReturnType<typeof setTimeout> | null;

const DEFAULT_DELAY = 600;
const EMPTY_TIMEOUT = null;

export const useTimeout = () => {
    const timeoutRef = useRef<TimeoutRefType>(EMPTY_TIMEOUT);

    const resetTimeout = useCallback(() => {
        if (!timeoutRef.current) return;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = EMPTY_TIMEOUT;
    }, []);
    const runTimeout = useCallback(
        (callback: () => void, delay?: number) => {
            resetTimeout();

            const delayValue = delay ?? DEFAULT_DELAY;
            timeoutRef.current = setTimeout(callback, delayValue);
        },
        [resetTimeout]
    );

    useEffect(() => {
        return () => resetTimeout();
    }, [resetTimeout]);

    return { resetTimeout, runTimeout };
};
