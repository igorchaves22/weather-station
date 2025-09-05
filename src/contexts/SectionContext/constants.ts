import { createContext } from "react";
import type { ISectionContext } from "./types";

export const INITIAL_SECTION = "Overview";

export const SectionContext = createContext({} as ISectionContext);
