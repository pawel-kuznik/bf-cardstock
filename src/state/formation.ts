export interface Formation {
    id: string;
    name: string;
    choices: FormationChoice[];
};

export interface FormationChoice {
    type: "hq"|"troops"|"support";
    units: string[];
};