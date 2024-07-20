import { SkillRating } from "../state/skillRating";

/**
 *  A function to create a valid SkillRating object.
 */
export function prepareSkillRating(initial?: Partial<SkillRating>) {
    const base : SkillRating = {
        assault: 0,
        counterAttack: 0,
        rating: 0
    };

    return { ...base, ...initial };
};