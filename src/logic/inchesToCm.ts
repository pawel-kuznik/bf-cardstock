/**
 *  Special rounding function that rounds inches to nearest multiple of 5
 *  in cm. This is how Battlefront translates their ranges on cards.
 */
export function inchesToCm(inches: number) : number {
    return Math.round(inches *  2.54 / 5) * 5;   
};
