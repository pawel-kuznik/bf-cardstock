import { TranslatedNames, UnitCard } from "../state";
import { clearObject } from "../utils/clearObject";
import { prepareMotivationRating } from "./prepareMotivationRating";
import { prepareSkillRating } from "./prepareSkillRating";
import { prepareUnitCard } from "./prepareUnitCard";

/**
 *  Parse arbitrary objects into UnitCard data. The function is mainly aimed
 *  to pase data objects we get from our forms, but it might prove useful later 
 *  with all kinds of sources.
 * 
 *  The function looks for refular properties of UnitCard in the object and tries
 *  to convert them to proper type. When it comes to complex properties (like
 *  `motivationRating`) it looks for object path to map properties (so, `motovationRating.rating`, etc).
 */
export function parseUnitCard(input: object) : UnitCard {

    const filled : Partial<UnitCard> = { };

    if ("id" in input && !!input.id) filled.id = String(input.id);

    if ("descriptor" in input) filled.descriptor = String(input.descriptor);

    const motivationRating = prepareMotivationRating();

    if ("motivationRating.rating" in input) motivationRating.rating = Number(input["motivationRating.rating"]);
    if ("motivationRating.morale" in input) motivationRating.morale = Number(input["motivationRating.morale"]);
    if ("motivationRating.remount" in input) motivationRating.remount = Number(input["motivationRating.remount"]);

    filled.motivationRating = prepareMotivationRating(clearObject(motivationRating));

    const skillRating = prepareSkillRating();

    if ("skillRating.rating" in input) skillRating.rating = Number(input["skillRating.rating"]);
    if ("skillRating.counterAttack" in input) skillRating.counterAttack = Number(input["skillRating.counterAttack"]);
    if ("skillRating.assault" in input) skillRating.assault = Number(input["skillRating.assault"]);

    filled.skillRating = prepareSkillRating(skillRating);

    filled.name = findNames(input);

    return prepareUnitCard(filled);
};

function findNames(input: object) : TranslatedNames {

    const supportedLanguages = [ "en" ];

    const names : TranslatedNames = { };

    for (const lang of supportedLanguages) {

        const langProp = `${lang}.name`;

        if (langProp in input) {
            names[lang] = String((input as any)[langProp])
        }
    }

    return names;
};
