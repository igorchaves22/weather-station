import { useCallback, useState, type PropsWithChildren } from "react";
import type { SectionType } from "~types";
import { INITIAL_SECTION, SectionContext } from "./constants";

export const SectionContextProvider = ({ children }: PropsWithChildren) => {
    const [currentSection, setCurrentSection] = useState<SectionType>(INITIAL_SECTION);

    const changeSection = useCallback((section: SectionType) => setCurrentSection(section), []);

    return <SectionContext.Provider value={{ currentSection, changeSection }}>{children}</SectionContext.Provider>;
};
