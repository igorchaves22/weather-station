import { memo, useEffect } from "react";
import { createPortal } from "react-dom";
import type { IOverlayModal } from "./types";
import "./styles.scss";

export const OverlayModal = memo(function OverlayModal({ isRendered, children }: IOverlayModal) {
    useEffect(() => {
        const originalOverflowValue = document.body.style.overflow;

        if (isRendered.delayed) document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflowValue;
        };
    }, [isRendered]);

    if (!isRendered.delayed) return null;

    return createPortal(
        <section className={`overlay-modal overlay-modal--${isRendered.immediate ? "show" : "hide"}`}>
            {children}
        </section>,
        document.body
    );
});
