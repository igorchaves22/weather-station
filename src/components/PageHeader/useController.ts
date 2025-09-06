import { useCallback, useContext, useEffect, useMemo } from "react";
import { ViewportContext } from "~contexts";
import { useToggle } from "~hooks";

export const useController = () => {
    const { breakpointStatus } = useContext(ViewportContext);
    const { state: navbarIsRendered, updateState: updateNavbarRender } = useToggle(undefined, true);

    const isScreen = useMemo(() => {
        const { lg } = breakpointStatus;

        return {
            mobile: !lg,
            desktop: lg
        };
    }, [breakpointStatus]);
    const toggleNavbarRender = useCallback(
        (applyValue: boolean) => {
            if (!isScreen.mobile) return;

            updateNavbarRender(applyValue, undefined, { value: 650, applyWhenFrom: true });
        },
        [isScreen.mobile, updateNavbarRender]
    );

    useEffect(() => {
        if (isScreen.desktop && navbarIsRendered.immediate) updateNavbarRender(false);
    }, [isScreen.desktop, navbarIsRendered.immediate, updateNavbarRender]);

    return { isScreen, navbarIsRendered, toggleNavbarRender };
};
