export const setLocalStorageItem = <T>(key: string, item: T) => {
    const jsonValue = JSON.stringify(item);

    return localStorage.setItem(key, jsonValue);
};

export const getLocalStorageItem = <T>(key: string) => {
    const item = localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;
};
