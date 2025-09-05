import { useCallback, useState, type PropsWithChildren } from "react";
import type { IQuery } from "~types";
import { getQuery, saveQueryToLocalStorage } from "~utils";
import { QueryContext } from "./constants";
import type { QueryKeyType } from "./types";

export const QueryContextProvider = ({ children }: PropsWithChildren) => {
    const [query, setQuery] = useState<IQuery>(getQuery());

    const updateQuery = useCallback(
        <K extends QueryKeyType>(key: K, value: IQuery[K]) =>
            setQuery((previousState) => {
                const newQuery = {
                    ...previousState,
                    [key]: value
                };

                saveQueryToLocalStorage(newQuery);

                return newQuery;
            }),
        []
    );

    return <QueryContext.Provider value={{ query, updateQuery }}>{children}</QueryContext.Provider>;
};
