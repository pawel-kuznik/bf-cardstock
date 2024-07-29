import { UnitCard } from "../state";
import { v4 as uuid } from "uuid";

/**
 *  Prepare an empty card object that can be then filled in. The function
 *  can be provisioned with initial values that would be inserted in 
 *  the complete unit card.
 */
export function prepareUnitCard(initial: Partial<UnitCard> | undefined = undefined) : UnitCard {

    const base = {
        id: initial?.id ? initial.id : uuid(),
        descriptor: '',
        name: { },
        motivationRating: {
            morale: 0,
            rating: 0,
            remount: 0
        },
        skillRating: {
            assault: 0,
            counterAttack: 0,
            rating: 0
        },
        variants: []
    };

    return { ...base, ...initial };
};
