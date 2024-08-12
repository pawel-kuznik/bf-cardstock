import { UnitCardVariant } from "../state";
import { prepareUnitVariant } from "./prepareUnitVariant";

export function parseUnitVariant(data: object) : UnitCardVariant {

    const base = prepareUnitVariant();

    if ("descriptor" in data) base.descriptor = String(data.descriptor);

    if ("armor.isHitOn" in data) base.armor.isHitOn = Number(data["armor.isHitOn"]);
    if ("armor.front" in data) base.armor.front = Number(data["armor.front"]);
    if ("armor.side" in data) base.armor.side = Number(data["armor.side"]);
    if ("armor.top" in data) base.armor.top = Number(data["armor.top"]);

    if ("movement.tactical" in data) base.movement.tactical  = Number(data["movement.tactical"]);
    if ("movement.terrainDash" in data) base.movement.terrainDash  = Number(data["movement.terrainDash"]);
    if ("movement.crossCountry" in data) base.movement.crossCountry  = Number(data["movement.crossCountry"]);
    if ("movement.roadDash" in data) base.movement.roadDash  = Number(data["movement.roadDash"]);
    if ("movement.cross" in data) base.movement.cross  = Number(data["movement.cross"]);

    return base;
};