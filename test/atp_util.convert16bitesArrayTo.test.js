const atp_util = require('../index');

test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([2])).toBe(2);
    expect(atp_util.convert16bitesArrayTo([65535])).toBe(65535);
});

test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([2],"uint")).toBe(2);
    expect(atp_util.convert16bitesArrayTo([3],"uint16")).toBe(3);
    expect(atp_util.convert16bitesArrayTo([65535],"uint16")).toBe(65535);
});


test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([3],"int16")).toBe(3);
    expect(atp_util.convert16bitesArrayTo([65535],"int16")).toBe(-1);
    expect(atp_util.convert16bitesArrayTo([2],"int")).toBe(2);
});

test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([65535,0],"int32")).toBe(65535);
    expect(atp_util.convert16bitesArrayTo([65535,65535],"int32")).toBe(-1);
    // expect(atp_util.convert16bitesArrayTo([65535,65535],"int")).toBe(-1);
    // expect(atp_util.convert16bitesArrayTo([65535,0],"int")).toBe(65535);
});

// test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
//     expect(atp_util.convert16bitesArrayTo([65535,0],"uint32")).toBe(65535);
// });
// test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
//     expect(atp_util.convert16bitesArrayTo([65535,65535],"uint32")).toBe(4294967295);
// });

test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([0x41,0x42],"string16bit")).toBe("AB");
});
test('Test: "atp_util.convert16bitesArrayTo(array, output_type)"', () => {
    expect(atp_util.convert16bitesArrayTo([0x4144,0x424A],"string")).toBe("DAJB");
    expect(atp_util.convert16bitesArrayTo([0x4144,0x424A],"string8bit")).toBe("DAJB");
});

