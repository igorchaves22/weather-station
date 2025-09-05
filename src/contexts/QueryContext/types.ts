import type { IQuery } from "~types";

export type QueryKeyType = keyof IQuery;

export interface IQueryContext {
    query: IQuery;
    updateQuery: <K extends QueryKeyType>(key: K, value: IQuery[K]) => void;
}
