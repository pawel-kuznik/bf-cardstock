import { TranslatedNames, UnitCard } from "../../state";

export interface UnitNameProps {
    unit?: UnitCard;
    name?: TranslatedNames;
};

export function UnitName({ unit, name } : UnitNameProps) {

    const actual = { ...(unit ? unit.name : name) };

    return (
        <span>
            {actual.en || "NO NAME"}
        </span>
    );
};