import { clearObject } from "./clearObject";

describe("clearObject", () => {
    it("should clear objects out of undefined", () => {

        const a = { foo: "bar", prop: undefined };

        const cleanA = clearObject(a);

        expect(cleanA).not.toHaveProperty("prop");
        expect(cleanA).toHaveProperty("foo", "bar");
    });

    it('should clear objects out of NaN', () => {

        const a = { foo: "bar", prop: NaN };
        
        const cleanA = clearObject(a);

        expect(cleanA).not.toHaveProperty("prop");
        expect(cleanA).toHaveProperty("foo", "bar");
    });

    it('should clear objects out of empty strings', () => {

        const a = { foo: "bar", prop: "", prop2: undefined };
        
        const cleanA = clearObject(a, { emptyStrings: true });

        expect(cleanA).not.toHaveProperty("prop");
        expect(cleanA).not.toHaveProperty("prop2");
        expect(cleanA).toHaveProperty("foo", "bar");
    });
});