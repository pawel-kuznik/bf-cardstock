import { prepareMotivationRating } from "./prepareMotivationRating";

describe("prepareMotivationRating", () => {
    it("should create valid MotivationRating object", () => {

        const motivationRating = prepareMotivationRating();

        expect(typeof motivationRating.morale).toBe("number");
        expect(typeof motivationRating.rating).toBe("number");
        expect(typeof motivationRating.remount).toBe("number");
    });
});