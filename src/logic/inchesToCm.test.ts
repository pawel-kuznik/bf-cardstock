import { inchesToCm } from "./inchesToCm";

describe("inchesToCm", () => {
    it('should round 14 inches to 35cm', () => {
        expect(inchesToCm(14)).toEqual(35);
    });
    it('should round 16 inches to 40cm', () => {
        expect(inchesToCm(16)).toEqual(40);
    });
    it('should round 18 inches to 45cm', () => {
        expect(inchesToCm(18)).toEqual(45);
    });
    it('should round 20 inches to 50cm', () => {
        expect(inchesToCm(20)).toEqual(50);
    });
    it('should round 28 inches to 70cm', () => {
        expect(inchesToCm(28)).toEqual(70);
    });
    it('should round 32 inches to 80cm', () => {
        expect(inchesToCm(32)).toEqual(80);
    });
    it('should round 40 inches to 100cm', () => {
        expect(inchesToCm(40)).toEqual(100);
    });
});