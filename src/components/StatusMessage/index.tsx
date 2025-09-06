import { memo } from "react";
import { applyClassNameIfTrue } from "~utils";
import type { IStatusMessage } from "./types";
import "./styles.scss";

export const StatusMessage = memo(function StatusMessage({ isRendered, isAbsolute, status, text }: IStatusMessage) {
    if (!isRendered.delayed) return null;

    return (
        <section className={"status-message" + applyClassNameIfTrue(isAbsolute, "status-message--is-absolute")}>
            <p
                className={
                    `status-message__text status-message__text--${isRendered.immediate ? "show" : "hide"}` +
                    applyClassNameIfTrue(status, `status-message__text--${status}`)
                }
            >
                {text}
            </p>
        </section>
    );
});
