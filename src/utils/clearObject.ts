
export interface ClearObjectOptions {
    undefined: boolean;
    nan: boolean;
    emptyStrings: boolean;
};

/**
 *  A helper function to clear objects out of unwanted properties. 
 */
export function clearObject<T>(input: T, options?: Partial<ClearObjectOptions>): Partial<T> {

    const adjustedOptions : ClearObjectOptions = { ...{ undefined: true, nan: true, emptyStrings: false }, ...options };

    const copy = { ...input };

    for (const prop in copy) {
        if (adjustedOptions.undefined && copy[prop] === undefined) delete copy[prop];
        if (adjustedOptions.nan && Number.isNaN(copy[prop])) delete copy[prop];
        if (adjustedOptions.emptyStrings && copy[prop] === "") delete copy[prop];
    }

    return copy;
}