const atp_util = require('../index');

test('Test: "atp_util.isArrayNotEmpty([])"', () => {
    expect(atp_util.isArrayNotEmpty([])).toBe(false);
});

test('Test: "atp_util.isArrayNotEmpty([6,5])"', () => {
    expect(atp_util.isArrayNotEmpty([6, 5])).toBe(true);
});

test('Test: "atp_util.isArrayNotEmpty({})"', () => {
    expect(atp_util.isArrayNotEmpty({})).toBe(false);
});

test('Test: "atp_util.isArrayNotEmpty(6)"', () => {
    expect(atp_util.isArrayNotEmpty(6)).toBe(false);
});

test('Test: "atp_util.isArrayNotEmpty("String")"', () => {
    expect(atp_util.isArrayNotEmpty("String")).toBe(false);
});