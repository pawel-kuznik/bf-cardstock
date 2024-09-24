import { prepareModelType } from "./prepareModelType";

describe('prepareModelType', () => {

    it('should create a new model type', () => {

        const model = prepareModelType();

        expect(model).toHaveProperty("name");
        expect(model).toHaveProperty("id");
    });

    it('should generate unique ids', () => {

        const model1 = prepareModelType();
        const model2 = prepareModelType();

        expect(model1.id).not.toEqual(model2.id);
    });
});
