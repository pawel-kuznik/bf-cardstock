import { prepareModelType } from "../logic/prepareModelType";
import { hydrateLocalZustandState } from "../utils";
import { ModelType } from "./models";

function prepareDefaultModelType(name: string) : ModelType {
    return prepareModelType({
        id: "model-" + name.toLocaleLowerCase().replace(" ", "-"),
        name
    });
};

export function hydrateDefaultModelTypes(key: string, version: number = 0) {

    hydrateLocalZustandState(key, () => ({
        modelTypes: defaultModelNames
            .sort((a, b) => a.localeCompare(b))
            .map(name => prepareDefaultModelType(name))
    }), version)
};

const defaultModelNames = [

    // Team Yankee :: US
    "M60 Patton",
    "M1 Abrams",
    "M1A1 Abrams",
    "IPM1 Abrams",
    "M113",
    "M113 OP",
    "M106",
    "M109",

    // Team Yankee: Soviets
    "BMP-1",
    "BMP-2",
    "BMP-3",
    "T-55",
    "T-64",
    "T-72",
    "T-80",

    // Flames of War: Americans
    "M4 Sherman",
    "M4A1 Sherman",

    // Flames of War: Soviets
    "T-70",
    "T-34",
    "KV1",
    "KV1a",
    "KV8",
    "SU-85"
];