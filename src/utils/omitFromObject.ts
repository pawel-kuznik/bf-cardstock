/**
 *  This is a helper function that allows for omitting a specific
 *  property from a passed object and returning a copy without
 *  that property.
 * 
 *  The original object is untouched.
 */
export function omitFromObject<TObject extends { [k:string]: any }, TProp extends string>(input: TObject, prop: TProp) : Omit<TObject, TProp> {

    const copy = { ...input }; 
    delete copy[prop];

    return copy;
};