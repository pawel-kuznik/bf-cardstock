import { UnitCardVariant } from "../state";

/**
 *  Prepare an empty unit variant object that can be filled in.
 */
export function prepareUnitVariant(initial: Partial<UnitCardVariant> | undefined = undefined) : UnitCardVariant {

    const base = {
        descriptor: "",
        armor: {
            isHitOn: 0,
            front: 0,
            side: 0,
            top: 0
        },
        movement: {
            tactical: 0,
            terrainDash: 0,
            crossCountry: 0,
            roadDash: 0,
            cross: 0
        },
        composition: []
    };

    return { ...base, ...initial };
};
