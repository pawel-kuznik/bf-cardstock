import { parseUnitCard } from "./parseUnitCard";

describe("parseUnitCard", () => {
    it('should parse a unit card out of only descriptor', () => {

        const input = { descriptor: "LP103" };
        const unitCard = parseUnitCard(input);

        expect(unitCard.descriptor).toEqual("LP103");
    });

    it('shoud parse a unit card when flat motivation inputs are present', () => {

        const input = {
            descriptor: "LP103",
            "motivationRating.rating": 3,
            "motivationRating.morale": 2,
            "motivationRating.remount": 4
        };
        const unitCard = parseUnitCard(input);

        expect(unitCard.motivationRating.rating).toEqual(3);
        expect(unitCard.motivationRating.morale).toEqual(2);
        expect(unitCard.motivationRating.remount).toEqual(4);
    });

    it('should parse a unit card when flat skill inputs are present', () => {

        const input = {
            descriptor: "LP103",
            "skillRating.rating": 3,
            "skillRating.counterAttack": 2,
            "skillRating.assault": 4
        };
        const unitCard = parseUnitCard(input);

        expect(unitCard.skillRating.rating).toEqual(3);
        expect(unitCard.skillRating.counterAttack).toEqual(2);
        expect(unitCard.skillRating.assault).toEqual(4);
    });
});