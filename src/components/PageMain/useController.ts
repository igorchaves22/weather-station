import { useContext, useEffect } from "react";
import { QueryContext, SectionContext } from "~contexts";
import { useToggle } from "~hooks";
import { COORD_SECTIONS } from "./constants";
import type { CoordSectionKeyType } from "./types";

export const useController = () => {
    const { currentSection } = useContext(SectionContext);
    const { query } = useContext(QueryContext);
    const { state: noteIsRendered, updateState: updateNoteRender } = useToggle(undefined, true);

    const hasQuery =
        COORD_SECTIONS.includes(currentSection as CoordSectionKeyType[number]) ?
            Boolean(query.coord)
        :   Boolean(query.city || query.coord);

    useEffect(
        () =>
            updateNoteRender(COORD_SECTIONS.includes(currentSection as CoordSectionKeyType[number]), undefined, {
                value: 600,
                applyWhenFrom: true
            }),
        [currentSection, updateNoteRender]
    );

    return { currentSection, hasQuery, noteIsRendered };
};
