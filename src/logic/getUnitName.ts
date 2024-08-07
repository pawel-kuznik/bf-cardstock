import { UnitCard } from "../state";

export function getUnitName(unitCard: UnitCard) : string {

    const translatedName = unitCard.name;

    if (!translatedName) return "NO NAME";

    return translatedName.en;
};