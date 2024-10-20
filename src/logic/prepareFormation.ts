import { Formation } from "../state";
import { v4 as uuid } from "uuid";

export function prepareFormation(initial: Partial<Formation> | undefined = undefined) : Formation {

    const base : Formation = {
        id: initial?.id ? initial.id : uuid(),
        name: "",
        choices: [],
    };

    return { ...base, ...initial };
};