export function each(arr, cb) {
    arr.forEach(cb);
}
export function assertEq(a, b, msg) {
    expect(a).toEqual(b /*, msg*/);
}
export function assertDeepEq(a, b, msg) {
    expect(a).toEqual(b /*, msg*/);
}
export function assertOk(val, msg) {
    expect(val).toBeTruthy( /*msg*/);
}
export function assertNotEqual(val1, val2, msg) {
    expect(val1).not.toEqual(val2 /*, msg*/);
}
//# sourceMappingURL=test-helpers.js.map