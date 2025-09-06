import { useCallback, useContext } from "react";
import { SectionContext } from "~contexts";
import type { SectionType } from "~types";

export const useController = () => {
    const { currentSection, changeSection } = useContext(SectionContext);

    const handleClick = useCallback(
        (section: SectionType, callback?: () => void) => {
            if (currentSection === section) return null;
            if (callback) callback();

            changeSection(section);
        },
        [changeSection, currentSection]
    );

    return { currentSection, handleClick };
};
