import { MotivationRating } from "../state/motivationRating";

/**
 *  A function to prepare a valid motivation rating object. 
 */
export function prepareMotivationRating(initial?: Partial<MotivationRating>) : MotivationRating {
    const base = {
        morale: 0,
        rating: 0,
        remount: 0
    };

    return { ...base, ...initial };
};
