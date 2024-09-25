import { UnitCompositionModels } from "../state";

export function prepareUnitCompositionModels(initial: Partial<UnitCompositionModels> | undefined = undefined) : UnitCompositionModels {
    
    const base = {
        model: "",
        count: 0
    };
    
    return { ...base, ...initial };
};