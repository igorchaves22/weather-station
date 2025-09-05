import type { IQuery } from "~types";
import { QUERY_CONFIG } from "./constants";
import { getLocalStorageItem, setLocalStorageItem } from "./local-storage";

export const getQueryFromLocalStorage = () => getLocalStorageItem<IQuery>(QUERY_CONFIG.key);

export const saveQueryToLocalStorage = (query: IQuery) => setLocalStorageItem<IQuery>(QUERY_CONFIG.key, query);

export const getQuery = () => getQueryFromLocalStorage() ?? QUERY_CONFIG.defaultState;
