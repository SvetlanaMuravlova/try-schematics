import { toInt } from '../utils/type-checks';
const ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
const orderingHash = ordering.reduce((mem, order) => {
    mem[order] = true;
    return mem;
}, {});
export function isDurationValid(duration) {
    const durationKeys = Object.keys(duration);
    if (durationKeys
        .some((key) => {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    let unitHasDecimal = false;
    for (let i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
// export function isValid() {
//   return this._isValid;
// }
//
// export function createInvalid(): Duration {
//   return createDuration(NaN);
// }
//# sourceMappingURL=valid.js.map