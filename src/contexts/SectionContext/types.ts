import type { SectionType } from "~types";

export interface ISectionContext {
    currentSection: SectionType;
    changeSection: (newSection: SectionType) => void;
}
