import { setOffsetToUTC } from '../units/offset';
import { createLocalOrUTC } from './from-anything';
export function createUTC(input, format, localeKey, strict) {
    const conf = createLocalOrUTC(input, format, localeKey, strict, true);
    return setOffsetToUTC(conf._d);
}
//# sourceMappingURL=utc.js.map