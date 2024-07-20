import { prepareUnitCard } from "./prepareUnitCard";

describe("prepareUnitCard", () => {

    it('should create a new card', () => {

        const card = prepareUnitCard();

        expect(card).toHaveProperty("descriptor");
        expect(card).toHaveProperty("id");
        expect(card).toHaveProperty("motivationRating");
    });

    it('should assign initial properties', () => {

        const card = prepareUnitCard({ descriptor: "LP1003" });

        expect(card.descriptor).toEqual("LP1003");
    });

    it("should generate unique ids", () => {

        const card1 = prepareUnitCard();
        const card2 = prepareUnitCard();

        expect(card1.id).not.toEqual(card2.id);
    });
});