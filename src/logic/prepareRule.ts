import { Rule } from "../state";
import { v4 as uuid } from "uuid";

export function prepareRule(initial: Partial<Rule> | undefined = undefined) : Rule {

    const base = {
        id: initial?.id ? initial.id : uuid(),
        name: "",
        description: ""
    };

    return { ...base, ...initial } ;
};