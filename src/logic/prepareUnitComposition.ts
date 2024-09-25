import { UnitComposition } from "../state";

export function prepareUnitComposition(initial: Partial<UnitComposition> | undefined = undefined) : UnitComposition {

    const base = {
        models: []
    };

    return { ...base, ...initial };
};
