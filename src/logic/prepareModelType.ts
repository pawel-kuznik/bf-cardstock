import { ModelType } from "../state/models";
import { v4 as uuid } from "uuid";

export function prepareModelType(initial: Partial<ModelType> | undefined = undefined) : ModelType {
    
    const base = {
        id: initial?.id ? initial.id : uuid(),
        name: ""
    };
    
    return { ...base, ...initial };
};