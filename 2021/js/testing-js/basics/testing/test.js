const { sum, subtract } = require('../math');

test('it should sum numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected)
})

test('it should subtract numbers', () => {
    const result = subtract(10, 5);
    const expected = 5;
    expect(result).toBe(expected)
})