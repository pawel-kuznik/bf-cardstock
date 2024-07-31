import { omitFromObject } from "./omitFromObject";

describe("omitFromObject", () => {
    it('omit a specific property from an object', () => {

        const result = omitFromObject({
            foo: "bar"
        }, "foo");

        expect(result).not.toHaveProperty("foo");
    });

    it('omits a specific property, but leave rest of them', () => {

        const result = omitFromObject({
            foo: "bar",
            baz: "test"
        }, "foo");

        expect(result).not.toHaveProperty("foo");
        expect(result).toHaveProperty("baz", "test");
    });

    it("shouldn't modify the input", () => {

        const input = { foo: "bar" };
        const result = omitFromObject(input, "foo");

        expect(result).not.toHaveProperty("foo");
        expect(input).toHaveProperty("foo", "bar");
    });
});