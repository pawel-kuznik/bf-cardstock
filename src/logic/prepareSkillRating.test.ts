import { prepareSkillRating } from "./prepareSkillRating";

describe("prepareSkillRating", () => {
    it('should create a valid SkillRating object', () => {

        const skillRating = prepareSkillRating();

        expect(typeof skillRating.assault).toBe("number");
        expect(typeof skillRating.counterAttack).toBe("number");
        expect(typeof skillRating.rating).toBe("number");
    });
});