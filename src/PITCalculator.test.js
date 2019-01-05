import PITCalculator from "./PITCalculator";

describe('PITCalculator', () => {
    let calc = null;

    beforeAll(() => {
        calc = new PITCalculator();
    });

    test('First', () => {
        expect(!!calc.pitForm).toBe(false);
    })
});
